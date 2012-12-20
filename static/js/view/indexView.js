define('/static/js/view/indexView', function ( require, exports, module ) {
    
    return Backbone.View.extend({
    
        id: '#jobMsg',
        
        template: _.template( $('#jobMsgTpl').html() ),
        
        events: {
            'click .close': 'closeJobMsgAlert'
        },

        initialize: function () {
        
        },

        render: function () {
        
        },

        closeJobMsgAlert: function () {
        
        }

    });

});
