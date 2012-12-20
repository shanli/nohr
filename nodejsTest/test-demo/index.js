var express = require('express'),
    app     = express(),
    http    = require('http'),
    fs      = require('fs'),
    server  = require('./testfuhao/config.js');
app.listen(server.ip.port, server.ip.host);

/**
 * 程序入口从浏览器访问171.16.17.134:8000
 * 加载html文件在浏览器里显示
 * 浏览器加载case/main.js开始执行测试用例
 */
var sendFileHandler = function ( req, res ) {
    res.sendfile(__dirname + req.url);
};

app.get('/', function ( req, res ) {
        var html = '<!DOCTYPE HTML><html><head><meta charset=utf-8>'
        +'<script src="testfuhao/src/lib/jquery.min.js"></script>'
        +'<script src="testfuhao/src/lib/jquery.textSearch-1.0.js"></script>'
        +'<script src="testfuhao/src/lib/hlwords.js"></script>'
        +'</head><body style="background-color: #CCE8CC;">';
        fs.readFile('testfuhao/index.html', 'utf-8', function ( err, data ) {
            html += data;
            html += '</body></html>';
            res.set({
                'Content-type': 'text/html',
                'charset'     : 'utf-8'
                });
            res.send(html);
            });
        });

app.get('/testfuhao/src/lib/*', sendFileHandler);
/**
app.get('/case/*', sendFileHandler);
app.get('/css/*', sendFileHandler);
                            */
console.log('http server start....');
