var models  = require('../model/index.js');

exports.route = {
    '/': function ( req, res ) {
        models.getIndexData(function ( data ) {
            var rd = createObject();
            rd.data = data;
            res.render('index-ejs', rd);
        });
    },
    '/job/:id': function ( req, res ) {
        models.getJobById(function ( data ) {
            // TODO
            var rd = createObject();
            rd.data = { 
                jid: 2,
                jname: '前端工程师',
                jdesc: '前端工程师描述1',
                requirement: '前端工程师职位要求1',
                number: 2,
                workplace: '北京',
                uid: 1,
                company: '公司一',
                ctime: '2012-11-04 13:26:59',
                refreshtime: '0000-00-00 00:00:00',
                work_year: '1',
                study_type: '1',
                jstatus: 1 
            };
            res.send(rd);
        })
    }
};

function createObject() {
    return {
        status  : 0,
        message : '',
        data    : null
    };
}
