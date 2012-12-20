/**
 * data: [{}, {}, {}....]
 * attr: 'action' || 'ext.app.appid'
 * return: true || false
 */
exports.checkAttrInData = function ( data, attr ) {
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
