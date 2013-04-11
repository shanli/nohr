var api = require('../src/queryapi.js');

function gettime(){
var now= new Date();
var month=now.getMonth()+1;
var day=now.getDate();
var hour=now.getHours();
var minute=now.getMinutes();
var second=now.getSeconds();
var milSecond = now.getMilliseconds();
var t = month+"-"+day+" "+hour+":"+minute+":"+second+":"+milSecond ;
return t;
}

var t = 0;
var si = setInterval(function () {
        if ( t >= 100000 ) {
            clearInterval(si);
            return false;
        }
        api.queryapi({ 
            host: 'api-dev.soquweb.tk', 
            path: '/index/login/register?username=tsta'+t+'&password=e10adc3949ba59abbe56e057f20f883e&type=1',
            headers : {
                apikey : 'BD5E86B1-A33F-4F75-8851-9B3604E7F030'
            }
        }, function ( resd ) {
            if( typeof resd === 'object'){
                console.log('ok:'+gettime()+': ');
                console.dir(resd);

            }

        }, function ( msg ) {
            console.log( 'err:' +gettime()+': '+ msg );
        });
    }, 20);

