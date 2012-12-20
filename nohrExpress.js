var express = require('express'),
    app     = express();

app.listen( 8000, '192.168.1.8' );

/**
 * 显示首页
 * www.nohr.com
 * 正常实现流程
 * 1.读取数据
 * 2.根据数据填充模板
 * 3.生成页面返回？
 */
app.get('/', function ( req, res ) {
    res.sendfile('static/template/index.html');
});

/**
 * 一个例子
 * 查看个人简历详情
 * 实际情况不一定是这样，再定
 * www.nohr.com/user/id
 */
app.get('/user/:id', function ( req, res ) {
    // 查询数据库
    // 处理结果
    // 返回前端
    // 该功能结束
    // code here
    // console.log(req.params.id)
    res.send( req.params.id )
});
app.get('/user/:id/page/:p', function ( req, res ) {
    // 查询数据库
    // 处理结果
    // 返回前端
    // 该功能结束
    // code here
    // console.log(req.params.id)
    res.send( req.params.id )
});
console.log('Server running at http://192.168.1.8:8000/');
