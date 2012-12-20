var connection = require('./connection.js');
exports.getDetailInfo = function ( id , callback ) {
    var db = connection.conn();
    db.query('select * from worker where id='+id).on('end', function ( d ) {
        callback( d.result.rows );
    })
    // add error eventlistener then call callback method
    // the args '[]'
    // ok
    .on('error', function ( e ) {
        callback([]);
        // please print e for develop
    });
    db.close(); 
};

