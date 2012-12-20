var connection = require('./connection.js');
exports.getIndexData = function ( callback ) {
    var db = connection.conn();
    db.query('select * from job limit 20').on('end', function ( d ) {
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

// TODO
exports.getJobById = function ( callback ) {
    callback();
};
