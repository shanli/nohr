// view: 
define('todo-view', function ( require, exports, module ) {

    return Backbone.View.extend({
        tagName: 'li',
        template: _.template( $('#item-template').html() ),

        events: {
            'click .toggle'     : 'toggleDone',
            'dblclick .view'    : 'edit',
            'click a.destroy'   : 'clear',
            'keypress .edit'    : 'updateOneEnter',
            'blur .edit'        : 'close'
        },

        initialize: function () {
            this.model.on( 'change', this.render, this );
            this.model.on( 'destroy', this.remove, this );
        },

        render: function () {
            this.$el.html( this.template( this.model.toJSON() ) );
            this.$el.toggleClass('done', this.model.get('done'));
            this.input = this.$('.edit');
            return this;
        },

        toggleDone: function () {
            this.model.toggle();
        },

        edit: function () {
            this.$el.addClass('editing');
            this.input.focus();
        },

        close: function () {
            var val = this.input.val();
            if ( !val ) { this.clear(); }
            this.model.save({ title: val });
            this.$el.removeClass('editing');
        },

        updateOneEnter: function ( e ) {
            if ( keyCode === 13 ) { this.close(); }
        },

        clear: function () {
            this.model.clear();
        }
    });

});
