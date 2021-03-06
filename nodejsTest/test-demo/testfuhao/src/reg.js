exports.reg = function ( url, callback, ecallback ) {
    console.log(url);
    var http = require('http'),
        rd   = '';
    var req = http.request(url, function ( res ) {
        res.setEncoding('utf-8');
        res.on('data', function ( d ) {
            rd += d;
        }).on('end', function () {
            console.log(rd);
            callback( JSON.parse(rd) );
        });
    }).on('error', function ( e ) {
        ecallback( e.message );
    });
    req.end();
};
