var md5 = require('../package/md5.js');
var data = require('../package/package.data.js');



	asyncTest("xingneng", function () {
			console.time("title");
			
			 for(var j = 0; j < 1000; j++ ){
			 	var ttl = "({ host: \"api-dev.soquweb.tk\", path: \"/index/login/register?username=xntest"+ j.toString()+"&password=123&type=1\",headers : {apikey : \"BD5E86B1-A33F-4F75-8851-9B3604E7F030\"}})";
			stop();
			queryapi( eval(ttl), function ( resd ) {
				ok( typeof resd == 'object', '返回值为JSON' );
				//notDeepEqual( resd, resdata, 'JSON匹配' );
				//console.log(resd);
                start();

				}, function ( msg ) {
				console.log( '测试接口出错: ' + msg );
				start();
				});
			setTimeout(function () {
				console.log("title" + ': 等待时间3s' );
				start();
				}, 5000);
		}
			console.timeEnd("title");
			});
