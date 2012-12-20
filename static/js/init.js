define(function ( require, exports, modules ) {
    var IndexRouter = require('./router/indexRouter'),
        indexRouter = new IndexRouter;
    Backbone.history.start();
});
