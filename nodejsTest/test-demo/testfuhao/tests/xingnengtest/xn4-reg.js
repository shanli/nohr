global.cnt = 0;//开始调用+1，调用完毕-1，当所有调用都完成该数为0
global.suc = 0;//调用成功，返回成功+1
global.err = 0;//调用成功，返回失败+1
global.fail = 0;//调用失败+1
global.bingfa = 0;//调用数量累加

function httpreq(args, count, t) {
    var http = require('http'),
        rd = '';
    if (count > 0) {
        var req = http.request(args, function (res) {
            res.setEncoding('utf-8');
            res.on('data',
                    function (d) {
                        rd += d;
                    }).on('end', function () {
                        global.bingfa++;
                        var data = null;
                        try {
                            data = JSON.parse(rd);
                        }
                        catch (e) {
                            console.log(t + ':ERR count:' + count + ' RES:' + rd);
                            if (count == 10) {
                                //count==10：递归的最外层
                                global.err++;
                            }
                            global.cnt--;
                            console.timeEnd(t);
                        }
                        //console.log(data);
                        if (data != null && typeof data == 'object') {
                            if (data.success != 1) {
                                //httpreq(args,count-1,t);
                                console.log(t + ':ERR count:' + count + ' RES:' + rd);
                                if (count == 10) {
                                    global.err++;
                                }
                                global.cnt--;
                                console.timeEnd(t);
                            }
                            else {
                                console.log(t + ':OK count:' + count);
                                if (count == 10) {
                                    global.suc++;
                                }
                                global.cnt--;
                                console.timeEnd(t);
                            }
                        }
                    });
        }).on('error', function (e) {
            global.bingfa++;
            console.log(e.message);
            if (count == 10) {
                global.fail++;
            }
            httpreq(args, count - 1, t);
        });
        req.end();
    }
    else {
        console.log(t + ':exeption: loop end');
        global.cnt--;
        console.timeEnd(t);
    }
}


function gettime() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var milSecond = now.getMilliseconds();
    var t = month + "-" + day + " " + hour + ":" + minute + ":" + second + ":" + milSecond;
    return t;
}

var request_count = 100000; //循环次数
var recursion_count = 10; //出错递归，重新请求次数
var request_interval_time = 10; //抛请求的间隔，毫秒
console.log('循环调用次数：' + request_count + '\n抛请求间隔：' + request_interval_time + '\n递归次数：' + recursion_count);


var t = 0;
var si = setInterval(function () {
    if (t >= request_count) {
        console.log('Request END');
        clearInterval(si);
        return false;
    }
    t++;
    console.time('T:' + t.toString());
    global.cnt++;
    //调用请求
    httpreq({
        host: 'api-dev.soquweb.tk',
        path: '/index/login/register?username=tst' + (300000 + t) + '&password=123&type=1',
        headers: {
            apikey: 'BD5E86B1-A33F-4F75-8851-9B3604E7F030'
        }
    }, recursion_count, 'T:' + t.toString());
}, request_interval_time);

var c = 0;
var tmp = 0;
//统计代码
var counter = setInterval(function () {
    if (c >= 200) {
        //当统计过程，global.cnt连续在50ms*100时间内为0，统计结束
        clearInterval(counter);
        console.log('成功次数：' + global.suc + '失败次数：' + global.err + '异常次数：' + global.fail);
        return false;
    }
    if (global.cnt == 0) {
        c++;
    }

    var bf = global.bingfa - tmp;
    tmp = global.bingfa;
    /*if (tmp != global.cnt){
    tmp = global.cnt;
    console.log('并发数：' + global.cnt + ' time:' + gettime());
    }*/
    console.log('并发数：' + bf + ' time:' + gettime());//50毫秒统计一次，统计50毫秒中发出的请求数量
}, 50);

