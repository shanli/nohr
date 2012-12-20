// appView: list, view
define('todo-appView', function ( require, exports, module ) {
    return Backbone.View.extend({
        el: $('#todoapp'),
        statsTemplate: _.template( $('#stats-template').html() ),
        events: {
            'keypress #new-todo'    : 'createOnEnter',
            'click #clear-completed': 'clearCompleted',
            'click #toggle-all'     : 'toggleAllComplete'
        },

        initialize: function () {
            this.view = this.options.view;
            this.input = this.$('#new-todo');
            this.allCheckbox = this.$('#toggle-all')[0];
            this.tList = this.options.tList;

            this.tList.on('add', this.addOne, this);
            this.tList.on('reset', this.alls, this);
            this.tList.on('all', this.render, this);

            this.footer = this.$('footer');
            this.main = $('#main');
            this.tList.fetch();
        },

        render: function () {
            var done = this.tList.done().length,
                remaining = this.tList.remaining().length;
            if ( this.tList.length ) {
                this.main.show();
                this.footer.show();
                this.footer.html( this.statsTemplate({ done: done, remaining: remaining }) );
            } else {
                this.main.hide();
                this.footer.hide();
            }
            this.allCheckbox.checked = !remaining;
        },
        alls: function () {
            var that = this;
            this.tList.each(function () {
                that.addOne(arguments[0]);
            });
        },
        
        addOne: function ( todo ) {
            var view = new this.view({ model: todo });
            this.$('#todo-list').append(view.render().el);
        },

        createOnEnter: function ( e ) {
            if ( e.keyCode != 13 || !this.input.val() ) {
                return;
            }
            this.tList.create({ 
                title: this.input.val(), 
                ntodo: this.tList.nextTodo() 
            });
            this.input.val('');
        },

        clearCompleted: function () {
            _.each(this.tList.done(), function ( todo ) {
                todo.clear();
            });
            return false;
        },

        toggleAllComplete: function () {
            var done = this.allCheckbox.checked;
            this.tList.each(function ( todo ) {
                todo.save({ done: done });
            });
        }
    });
});
