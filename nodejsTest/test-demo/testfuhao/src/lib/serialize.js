/**
 * options is object
 * {
 *      host    : 127.0.0.1,
 *      port    : 80,
 *      path    : /data/index.php,
 *      param   : {
 *          id  : 1,
 *          page: 3,
 *          ...
 *      }
 * }
 * return: http://127.0.0.1:80/data/index.php?id=1&page=3 || ''
 */
exports.serialize = function ( options ) {
    var url = '';
    if ( typeof options === 'object' ) {
        var param = options.param;
        if ( param ) {
            url = '?';
            for ( var p in param ) {
                url += p +'='+ param[p] + '&';
            }
            url = url.slice( 0, url.length -1 );
        }
        url = 'http://' + options['host'] +':'+ options['port'] + options['path'] + url;
    }
    return url;
};
