//console.log('hello world');
var http = require('http'); 
http.createServer(function (req, res) { 
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); 
    res.write('这是我的第一个node.js测试文件。');
    res.end('我是高崇，哈哈'); 
}).listen(8000, "192.168.1.8");
 
console.log('Server running at http://127.0.0.1:1337/');
