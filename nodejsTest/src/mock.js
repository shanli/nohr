exports.mock = function ( url, callback, ecallback ) {
    var http = require('http'),
        ser  = require('/home/gc/test-n2p/nodejsTest/src/serialize'),
        rd   = '';

    url  = ser.serialize( url );
    console.log('请求的URL: ' + url);

    http.get(url, function ( res ) {
        res.setEncoding('utf-8');
        res.on('data', function ( d ) {
            rd += d;
        }).on('end', function () {
            callback( JSON.parse(rd) );
        });
    }).on('error', function ( e ) {
        ecallback( e.message );
    });
};
