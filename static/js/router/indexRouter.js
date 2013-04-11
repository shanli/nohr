define('indexRouter', function ( require, exports, module ) {

    var IndexCollection = require('./collection/indexCollection'),
        IndexModel      = require('./model/indexModel'),
        IndexView       = require('./view/indexView'),
        indexCollection = new IndexCollection({ model: IndexModel });

    var sCallBack = function ( model, res ) {
        console.log(indexCollection.toJSON())
    }
    , eCallBack = function ( msg ) {
        alert( msg );
    };
    
    return Backbone.Router.extend({
    
        routes: {
            'job/:id': 'job'
        },

        // www.nohr.com/#job/2
        job: function ( id ) {
            indexCollection.fetch({
                url     : 'job/' + id,
                success : sCallBack, 
                error   : eCallBack 
            })
        }

    });

});
