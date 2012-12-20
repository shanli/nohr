var execute = require('./create.js');

execute.create(
    'INSERT INTO study (wid, schoolname, sdegree, major, sbegin, send) VALUES (?, ?, ?, ?, ?, ?)', 
    [0, 'x', 'y', 'z', '2012-11-03 22:07', '2012-11-03 22:08'], 
    5, 1000, function ( s, e ) {
    console.log( '成功：' + s );
    console.log( '失败：' + e );
});
