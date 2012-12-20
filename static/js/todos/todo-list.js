// list: model
define('todo-list', function ( require, exports, module ) {
    var Todo = require('todo-model');
    return Backbone.Collection.extend({

        model: Todo,
        localStorage: new Store('todo'),

        done: function () {
            return this.filter(function ( todo ) {
                return todo.get('done');
            });
        },

        remaining: function () {
            return this.without.apply( this, this.done() );
        },

        nextTodo: function () {
            if ( !this.length ) { return 1; }
            return this.last().get('ntodo') + 1;
        },

        comparator: function ( todo ) {
            return todo.get('ntodo');
        }

    });
    
});
