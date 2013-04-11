var express = require('express'),
    app     = express();

try {
    app.listen( 8000, '192.168.1.8' );
} catch ( e ) {
    console.log(e.message);
}

/**
 * 基本配置
 */
app.configure(function () {
    app.set( 'views', __dirname + '/static/template' );
    // app.set( 'view engine', 'jade' );
    app.set( 'view engine', 'ejs' );
    app.use( express.bodyParser() );
    app.use( express.methodOverride() );
    app.use( app.router );
});

var startRouter = function ( routes, path ) {
    app.get(path, function ( req, res ) {
        routes[path]( req, res );
    });
};

/**
 * 显示首页
 * www.nohr.com
 * 正常实现流程
 * 1.读取数据
 * 2.根据数据填充模板
 * 3.生成页面返回？
 */
var routes = require('./routers/index.js').route;
var detail_routes = require('./routers/detail.js').route;

for ( var route in routes ) {
    startRouter( routes, route );
}



for ( var li in detail_routes ) {
    startRouter( detail_routes, li );
}


console.log('Server running at http://192.168.1.8:8000/');
