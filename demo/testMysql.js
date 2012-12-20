ys = require('util');
var Client = require('mysql').Client;
var client = new Client();

client.user = 'root';
client.password = 'root';
client.query("use nohr");
client.query("select * from person",function(err, result, fields){
	console.log(err);
	console.log(result);
	client.end();
});
