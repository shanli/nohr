var login = require('../src/moreReq.js');

/**
 * '*'表示用不同的用户名登陆 test0 test1 test2
 * 不加*表示使用同一个用户名登陆
 * args1: 接口地址参数等
 * args2: 请求的次数
 * args3: 发出一个请求的时间
 * args4: 所以请求执行完毕的回调
 */
login.moreReq({
    host    : 'api-dev.soquweb.tk',
    path    : '/index/login/index/?type=1&password=123&username=tst*',
    headers : {
        apikey : '42A90DCC-3C19-E9A4-BDC6-8CC7F7800273'
    }
}, 10, 10, function ( success, error, timeout ) {
    console.log( '请求成功：' + success + '次' );
    console.log( '请求失败：' + error + '次' );
    console.log( '请求超时：' + timeout + '次' );
});
