var httpreq = require('./jstest/httpreq-login.js');


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
        if ( t >= 10 ) {
            clearInterval(si);
            return false;
        }
        t++;
        console.time(t.toString());
        httpreq.httpreq({
            host: 'api-dev.soquweb.tk',
            path: '/index/login/index?username=tst'+10010+t+'&password=123&type=1',
            headers : {
                apikey : 'BD5E86B1-A33F-4F75-8851-9B3604E7F030'
                    }
            },10,t.toString());
    }, 20);

