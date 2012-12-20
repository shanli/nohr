define('/static/js/model/indexModel', function ( require, exports, module ) {
    var Job = Backbone.Model.extend({
        defaults: {
            jid     : 0,
            jname   : '',
            jdesc   : '',
            rr      : '',
            number  : 0,
            wp      : '',
            company : '',
            ctime   : '',
            tr      : '',
            wy      : 0,
            st      : 0
        }
    });
    return Job;
});
