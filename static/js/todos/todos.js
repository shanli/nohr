define(function ( require, exports, module ) {
    
    var Todo = require('./todo-model');
    var TodoList = require('./todo-list');
    var tList = new TodoList();
    // Todo.defaults.ntodo = tList.nextTodo();
    var View = require('./todo-view');
    var AppView = require('./todo-appView');
    var appView = new AppView({tList: tList, view: View}); 
    /**
    var Todo = require('./a');
    var TodoList = require('./b');
    console.log(Todo, TodoList);
    */
});
