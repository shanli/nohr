var db = require('mysql-native').createTCPClient();

db.auto_prepare = true;
db.auth('nohr', 'root', 'root');

/**
 * sql: is a sql string
 * param: is params of the sql
 * count: execute 100 item
 * time: when 1s execute
 */

exports.create = function ( sql, param, count, time, callback ) {
    
    var c  = 0,
        ss = 0,
        e  = 0,
        a  = 0;
    var step = 0;
    var s = setInterval(function () {
    
        if ( c >= count ) {
            clearInterval( s );
            return false;
        }

        if ( param instanceof Array ) {
            var p = param.slice().map(function ( elem, i, arr ) {
                if ( elem.toString().search(':') != -1 ) {
                    return elem;
                }
                return elem + c;
            });
        }

        db.execute( sql, p ).on( 'end', function () {
            ss++;
            runner();
        }).on( 'error', function ( err ) {
            e++;
            runner();
            console.log( 'error message: ' + err );
        });

        c++;

    }, time);

    function runner() {
        a++;
        if ( a == count ) {
            callback( ss, e );
            db.close();
        }
    }

};
