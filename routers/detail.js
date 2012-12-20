var models = require('../model/detail.js');
exports.route = {
    '/': function ( req, res ) {
        models.getDetailInfo(function ( data ) {
            res.render('detail-ejs', {
        		status: 0,
        		message: '',
        		data: data
        	});
        });
    },
    '/:id':function( req,res ) {
    	models.getDetailInfo(id,function(){
    		res.render('detail-ejs', {
        		status: 0,
        		message: '',
        		data: data
        	});
    	});
    }
};
