var express = require('express'),
    app     = express(),
    http    = require('http'),
    fs      = require('fs');

app.listen(8000, '172.16.17.134');

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
        +'<script src="nodejsTest/src/jquery.min.js"></script>'
        +'<script src="nodejsTest/src/jquery.textSearch-1.0.js"></script>'
        +'<script src="nodejsTest/src/hlwords.js"></script>'
        +'</head><body style="background-color: #CCE8CC;">';
    fs.readFile('nodejsTest/index.html', 'utf-8', function ( err, data ) {
        html += data;
        html += '</body></html>';
        res.set({
            'Content-type': 'text/html',
            'charset'     : 'utf-8'
        });
        res.send(html);
    });
    // res.sendfile('nodejsTest/index.html');
});

app.get('/nodejsTest/src/*', sendFileHandler);
/**
app.get('/case/*', sendFileHandler);
app.get('/css/*', sendFileHandler);
*/
console.log('172.16.17.134:8000, start....');






/*
app.get('/', function ( req, res ) {

    var url = 'http://172.16.17.64:8080/v1/mock/de_new2.php?1350290089626?v=8&ct=3&pid=d894b14893ac4bda81edaf8d424b25ba&w=320&    h=48&uid=test1&mt=iPhone4&ns=1&ijb=0&pf=1&sv=&loc=&cn=&cot=128&admc=0&df=json_ext&did=test1';
    
    http.get(url, function ( c_res ) {
        var rd = '';
        
        c_res.setEncoding('utf-8');
        
        c_res.on('data', function ( d ) {
            rd += d;
        }).on('end', function () {
            res.send(rd);
        });

    }).on('error', function ( e ) {
        res.send(e.message);
    });

});
*/

