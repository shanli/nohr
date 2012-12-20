QUnit.module('/v1/mock/de_new2.php');
asyncTest('主页列表数据接口', function () {
    
    stop();
    
    mock({
        host : '172.16.17.64',
        port : 8080,
        path : '/v1/mock/de_new2.php',
        param: {
            v: 8, ct: 3, pid: 'd894b14893ac4bda81edaf8d424b25ba',
            w: 32, h: 48, uid: 'test1',
            mt: 'iPhone4', ns: 1, ijb: 0, pf: 1,
            sv: '', loc: '', cn: '', cot: 12, admc: 0,
            df: 'json_ext', did: 'test1'
        }
    }, function ( data ) {
        
        ok( typeof data === 'object', '返回值为JSON' );
        ok( data != null, '返回值不为空' );
        ok( data.length > 0, '数组的长度大于0' ); 
        ok( checkAttrInData( data, 'action' ), 'action字段在item中' );
        ok( checkAttrInData( data, 'ext.app.appid' ), 'ext.app.appid字段在item中' );

        start();

    }, function ( msg ) {
        console.log( '测试接口出错: ' + msg );
        start();
    });

    setTimeout(function () {
        console.log( '等待测试时间5s' );
        start();
    }, 5000);

});
asyncTest('主页列表数据接口参数输入', function () {
    
    stop();
    
    mock({
        host : '172.16.17.64',
        port : 8080,
        path : '/v1/mock/de_new2.php',
        param: {
            v: 8, ct: 3, pid: 'd894b14893ac4bda81edaf8d424b25ba',
            w: 32, h: 48, 
            mt: 'iPhone4', ns: 1, ijb: 0, pf: 1,
            sv: '', loc: '', cn: '', cot: 12, admc: 0,
            df: 'json_ext', did: 'test1'
        }
    }, function ( data ) {
        
        ok( data != null, 'data != null 没有输入uid 应该有返回值' );

        start();

    }, function ( msg ) {
        console.log( '测试接口出错: ' + msg );
        start();
    });

    setTimeout(function () {
        console.log( '等待测试时间5s' );
        start();
    }, 5000);

});
/**
 * data: [{}, {}, {}....]
 * attr: 'action' || 'ext.app.appid'
 * return: true || false
 */
function checkAttrInData( data, attr ) {
    if ( !data ) {
        return false;
    }
    attr = attr.split('.');
    for ( var i = 0, len = data.length; i < len; i++ ) {
        // ['action']
        // [ext, app, appid]
        var td = data[i];
        for ( var j = 0, l = attr.length; j < l; j ++ ) {
            // attr[j] ---> ext, app, appid
            if ( td[attr[j]]  ) {
                td = td[ attr[j] ];
            } else {
                return false;
            }
        }
    }
    return true;
}
