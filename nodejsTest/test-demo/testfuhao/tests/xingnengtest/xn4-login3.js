//var httpreq = require('./jstest/httpreq.js');
global.cnt = 0
function httpreq(args,count,t){
    var http = require('http'),
        rd   = '';
    if (count > 0){
        var req = http.request(args, function ( res ) {
                res.setEncoding('utf-8');
                res.on('data',
                    function( d ) {
                    rd += d;
                    }).on('end', function(){
                        var data = JSON.parse(rd);
                        //console.log(data);
                        if(data != null && typeof data == 'object' ){
                        if (data.success != 1){
                        httpreq(args,count-1,t);
                        //console.log(t+':ERR count:'+count+' RES:'+rd);
                        //global.cnt--;
                        //console.timeEnd(t);
                        }
                        else{
                        httpreq(args,count-1,t);
                        //console.log(t+':OK count:'+count);
                        //global.cnt--;
                        //console.timeEnd(t);
                        }
                        }
                        });
                }).on('error',function(e){
                    console.log(e.message);
                    httpreq(args,count,t);
                    });
        req.end();
    }
    else{
        console.log(t+': loop end');
        global.cnt--;
        console.timeEnd(t);
    }
}


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
        console.time('T:'+ t.toString());
        global.cnt ++;
        httpreq({
            host: 'api-dev.soquweb.tk',
            path: '/index/login/index?username=tst'+13000+t+'&password=123&type=1',
            headers : {
                apikey : 'BD5E86B1-A33F-4F75-8851-9B3604E7F030'
                    }
            },10,'T:'+ t.toString());
    }, 20);

var c = 0;
var tmp = 0;
var counter = setInterval(function () {
    if ( c >= 100 ) {
        clearInterval(counter);
        return false;
    }
    if ( global.cnt == 0 ){
        c++;
    }
    if (tmp != global.cnt){
        tmp = global.cnt;
        console.log('并发数：'+global.cnt+' time:'+gettime());
    }
    }, 5);

