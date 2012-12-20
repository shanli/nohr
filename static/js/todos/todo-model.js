// model: list
define(function ( require, exports, module ) {
    return Backbone.Model.extend({
        
        defaults: function () {
            return {
                'title': 'empty todo...',
                done: false
            }; 
        },
    
        initialize: function () {
            if ( !this.get('title') ) {
                this.set({ 'title': this.defaults.title });
            }
        },

        toggle: function () {
            this.save({ done: !this.get('done') });
        },

        clear: function () {
            this.destroy();
        }

    });

});
