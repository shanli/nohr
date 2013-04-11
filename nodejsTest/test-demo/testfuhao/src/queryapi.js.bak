exports.queryapi = function ( url, callback, ecallback ) {
    //console.log('HOST:  '+url['host']);
    //console.log('PATH:  '+url['path']);
    //console.log('HEADER:  apikey='+url['headers']['apikey']);
    var http = require('http'),
        rd   = '';
    var req = http.request(url, function ( res ) {
        res.setEncoding('utf-8');
        res.on('data', function ( d ) {
            rd += d;
        }).on('end', function () {
            callback( JSON.parse(rd) );
        });
    }).on('error', function ( e ) {
        ecallback( e.message );
    });
    req.end();
};
