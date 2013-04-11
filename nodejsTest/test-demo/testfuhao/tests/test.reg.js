var log     = require('../package/package.reg.js'),
    redis   = require('redis');
    require('qunit');

QUnit.module('测试注册接口:/index/login/register');

var redisinfo={
    host: '220.231.5.61',
    port: 6379,
    auth: 'pub_1qaz@WSX'
}


// 必选参数
asyncTest('输入必选参数注册', function () {
    stop();
    reg(log.log_in_01(), function ( data ) {

        console.log('返回的数据：');
        console.log(data); 
        
        ok( typeof data === 'object', '返回值为JSON' );
        ok( data.success == 1, '返回状态成功' );
        ok( (data.token+'').length > 0, 'token有值：'+data.token );        
        ok( (data.code+'').length > 0, 'code有值：'+data.code );
                
        var client  = redis.createClient(redisinfo.port, redisinfo.host);
        client.auth(redisinfo.auth, function () {
            client.get(data.token, function ( err, reply ) {
                ok( reply.length > 0, 'redis中token存在' );
                client.end();    
                start();
            });
        });
    }, errMsg);
    timmer(10);
});

// 必选参数:用户已经存在
asyncTest('输入已经存在用户信息注册', function () {
    stop();
    reg(log.log_in_02(), function ( data ) {

        console.log('返回的数据：');
        console.log(data); 
        
        ok( typeof data === 'object', '返回值为JSON' );
        ok( data.success == 0, '返回异常状态' );
        equal( data.ErrorCode, '-9', '用户已经存在' );
        ok( data.Reason.length > 0, '有错误提示信息：'+data.Reason );
        //ok( (data.token+'').length > 0, 'token有值：'+data.token );        
        //ok( (data.code+'').length > 0, 'code有值：'+data.code );
        /*        
        var client  = redis.createClient(redisinfo.port, redisinfo.host);
        client.auth(redisinfo.auth, function () {
            client.get(data.token, function ( err, reply ) {
                ok( reply.length > 0, 'redis中token存在' );
                client.end();    
                start();
            });
        }); */
    start();
    }, errMsg);
    timmer(5);
});

//没有header
asyncTest('没传递apikey注册', function () {
    stop();

    reg(log.log_in_03(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '返回异常状态' );
        equal( data.ErrorCode, '-11', 'apikey错误' );
        ok( data.Reason.length > 0, '有错误提示信息：'+data.Reason );

        start();

    }, errMsg);
    
    timmer(5);
});

//错误header
asyncTest('用错误的apikey登陆', function () {
    stop();

    reg(log.log_in_04(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '返回异常状态' );
        equal( data.ErrorCode, '-11', 'apikey错误' );
        ok( data.Reason.length > 0, '有错误提示信息：'+data.Reason );

        start();

    }, errMsg);
    
    timmer(5);
});

// 必选参数:type为空
asyncTest('type为空注册', function () {
    stop();

    reg(log.log_in_05(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '返回异常状态' );
        equal( data.ErrorCode, '-2', '注册类型错误' );
        ok( data.Reason.length > 0, '有错误提示信息：'+data.Reason );

        start();

    }, errMsg);
    
    timmer(5);
});

// 必选参数:type错误
asyncTest('type错误注册', function () {
    stop();

    reg(log.log_in_06(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '返回异常状态' );
        equal( data.ErrorCode, '-2', '注册类型错误' );
        ok( data.Reason.length > 0, '有错误提示信息：'+data.Reason );

        start();

    }, errMsg);
    
    timmer(5);
});

// 必选参数:username为空
asyncTest('账号为空进行注册', function () {
    stop();

    reg(log.log_in_07(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '返回异常状态' );
        equal( data.ErrorCode, '-1', '账号为空进行注册' );
        ok( data.Reason.length > 0, '有错误提示信息：'+data.Reason );

        start();

    }, errMsg);
    
    timmer(5);
});

// 必选参数:没有username
asyncTest('没有账号进行注册', function () {
    stop();

    reg(log.log_in_08(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '返回异常状态' );
        equal( data.ErrorCode, '-1', '账号为空进行注册' );
        ok( data.Reason.length > 0, '有错误提示信息：'+data.Reason );

        start();

    }, errMsg);
    
    timmer(5);
});

// 必选参数:password为空
asyncTest('密码为空进行注册', function () {
    stop();

    reg(log.log_in_09(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '返回异常状态' );
        equal( data.ErrorCode, '-5', '密码为空进行注册' );
        ok( data.Reason.length > 0, '有错误提示信息：'+data.Reason );

        start();

    }, errMsg);
    
    timmer(5);
});


// 必选参数:没有password
asyncTest('没有密码进行注册', function () {
    stop();

    reg(log.log_in_10(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        equal( data.success, '0', '返回异常状态' );
        equal( data.ErrorCode, '-5', '没有密码进行注册' );
        ok( data.Reason.length > 0, '有错误提示信息：'+data.Reason );

        start();

    }, errMsg);
    
    timmer(5);
});

// 输入正确可选参数
asyncTest('输入全部正确的可选参数进行注册', function () {
    stop();

    reg(log.log_in_11(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        ok( typeof data === 'object', '返回值为JSON' );
        
        ok( data.success == 1, '返回成功状态' );
        
        ok( (data.token+'').length > 0, 'token有值：'+data.token );
        
        ok( (data.code+'').length > 0, 'code有值:'+data.code );
                
        var client  = redis.createClient(redisinfo.port, redisinfo.host);
        client.auth(redisinfo.auth, function () {
            client.get(data.token, function ( err, reply ) {
                ok( reply.length > 0, 'redis中token存在' );
                client.end();    
                start();
            });
        });

    }, errMsg);
    
    timmer(5);
});

// 输入不正确的可选参数
asyncTest('输入不正确的可选参数进行注册', function () {
    stop();

    reg(log.log_in_12(), function ( data ) {

        console.log('返回的数据：');
        console.log(data);

        //ok( typeof data === 'object', '返回值为JSON' );
        
        //ok( data.success == 0, '返回异常状态' );
        start();

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
