var log     = require('../package/package.login.js'),
    redis   = require('redis');

QUnit.module('测试登陆接口/index/login/index');

asyncTest('输入必要参数登陆', function () {
    stop();
    login(log.log_1_in(), function ( data ) {

        console.log('返回的数据：');
        console.log(data); 
        
        ok( typeof data === 'object', '返回值为JSON' );
        
        ok( data.success == 1, '登陆状态正常' );
        
        ok( (data.token+'').length > 0, 'token有值' );
        
        ok( (data.code+'').length > 0, 'code有值' );
                
        var client  = redis.createClient(6379, '220.231.5.61');
        client.auth('pub_1qaz@WSX', function () {
            client.get(data.token, function ( err, reply ) {
                ok( reply.length > 0, 'redis中token已返回' );
                client.end();    
                start();
            });
        });
        
        // start();

    }, errMsg);

    timmer(15);
});



asyncTest('没传递apikey登陆', function () {
    stop();

    login(log.log_2_in(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '登陆出错' );
        equal( data.ErrorCode, '-1', 'apikey错误' );
        ok( data.Reason.length > 0, '有错误提示信息' );

        start();

    }, errMsg);
    
    timmer(5);
});

asyncTest('用错误的apikey登陆', function () {
    stop();

    login(log.log_9_in(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '登陆出错' );
        equal( data.ErrorCode, '-1', 'apikey错误' );
        ok( data.Reason.length > 0, '有错误提示信息' );

        start();

    }, errMsg);
    
    timmer(5);
});

asyncTest('没有输入账号登陆', function () {
    stop();

    login(log.log_3_in(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '登陆出错' );
        equal( data.ErrorCode, '-2', '没有输入用户名' );
        ok( data.Reason.length > 0, '有错误提示信息' );

        start();

    }, errMsg);
    
    timmer(5);
});

asyncTest('账号为空进行登陆', function () {
    stop();

    login(log.log_4_in(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '登陆出错' );
        equal( data.ErrorCode, '-2', '账号为空字符串' );
        ok( data.Reason.length > 0, '有错误提示信息' );

        start();

    }, errMsg);
    
    timmer(5);
});

asyncTest('账号为多个空格进行登陆', function () {
    stop();

    login(log.log_5_in(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '登陆出错' );
        equal( data.ErrorCode, '-2', '账号为多个空格' );
        ok( data.Reason.length > 0, '有错误提示信息' );

        start();

    }, errMsg);
    
    timmer(5);
});

asyncTest('没有输入密码进行登陆', function () {
    stop();

    login(log.log_6_in(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '登陆出错' );
        equal( data.ErrorCode, '-3', '没有输入密码' );
        ok( data.Reason.length > 0, '有错误提示信息' );

        start();

    }, errMsg);
    
    timmer(5);
});

asyncTest('密码为空进行登陆', function () {
    stop();

    login(log.log_7_in(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '登陆出错' );
        equal( data.ErrorCode, '-3', '密码为空字符串' );
        ok( data.Reason.length > 0, '有错误提示信息' );

        start();

    }, errMsg);
    
    timmer(5);
});

asyncTest('使用随机密码进行登陆', function () {
    stop();

    login(log.log_8_in(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '登陆出错' );
        equal( data.ErrorCode, '-5', '密码为随机数' );
        ok( data.Reason.length > 0, '有错误提示信息' );

        start();

    }, errMsg);
    
    timmer(5);
});

asyncTest('输入全部正确的参数进行登陆', function () {
    stop();

    login(log.log_10_in(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        ok( typeof data === 'object', '返回值为JSON' );
        
        ok( data.success == 1, '登陆状态正常' );
        
        ok( (data.token+'').length > 0, 'token有值' );
        
        ok( (data.code+'').length > 0, 'code有值' );
                
        var client  = redis.createClient(6379, '220.231.5.61');
        client.auth('pub_1qaz@WSX', function () {
            client.get(data.token, function ( err, reply ) {
                ok( reply.length > 0, 'redis中token已返回' );
                client.end();    
                start();
            });
        });

    }, errMsg);
    
    timmer(5);
});

function errMsg( msg ) {
    console.log( '测试接口出错: ' + msg );
    start();
}

function timmer( s ) {
    setTimeout(function () {
        console.log( '等待测试时间'+s+'s' );
        start();
    }, s*1000);
}
