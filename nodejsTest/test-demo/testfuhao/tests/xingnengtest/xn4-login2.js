var httpreq = require('../jstest/httpreq-login.js');


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
        if ( t >= 1 ) {
            clearInterval(si);
            return false;
        }
        t++;
        console.time(t.toString());
        httpreq.httpreq({
            host: 'api-dev.soquweb.tk',
            path: '/index/login/register?type=1&username=test1352121168584&password=123&mac=zhaoxuetian%40adsage.com&guid=1352121168584&udid=xxx&open_udid=xxx_id&device=11111111&game_server_id=abc1111&channels=aaa789&question=123&answer=123&phone=zhaoxuetian%40adsage.com&email=abc',
            headers : {
                apikey : 'BD5E86B1-A33F-4F75-8851-9B3604E7F030'
                    }
            },1,t.toString());
    }, 2000);

