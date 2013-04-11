exports.moreReq = function ( args, moreReq, time, callback ) {

    var http    = require('http'),
        t       = 0,
        success = 0,
        error   = 0,
        timeout = 0,
        all     = 0;

    var path = args.path,
        rp;
    if ( path.charAt( path.length - 1 ) == '*' ) {
        rp = path.slice( 0, path.length - 1 );
    }


    console.time('请求时间');
    console.log('登陆' + moreReq + '次');

    var s = setInterval(function () {
        
        if ( t >= moreReq ) {
            clearInterval( s );
            return false;
        }

        if ( rp ) {
            args.path = rp + t;
        }
        
        var req = http.request(args, function ( res ) {
            res.on('end', function () {
                success++;
                reCall();
            });
        }).on('error', function ( e ) {
            error++;
            reCall();
        });
        
        req.setTimeout(5000, function () {
            timeout++;
            reCall( req );
        });
        
        req.end();   
        t++;

    }, time);

    function reCall( req ) {
        all++;
        if ( all == moreReq ) { 
            console.timeEnd('请求时间');
            callback( success, error, timeout ); 
        } else if ( all > moreReq && req) {
            req.end();
        }
    }

};
