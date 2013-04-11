var mn = require('mysql-native');
exports.conn = function () {
    var db = mn.createTCPClient();
    db.auto_prepare = true;
    db.auth('nohr', 'root', 'root');
    db.query('set names utf8');
    return db;
};
