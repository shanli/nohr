console.log("prepare connection database...");
var sys = require('util');
var Client = require('mysql').Client;
var client = new Client();

//userName and passWord info
client.user = 'root';
client.password = 'root';
//client.port = 3306;
//client.host = '192.168.1.8';

//database name
client.query('USE nohr');
client.query('select * from person',function selectPe(error,results,fields){
	if(error){
		    console.log('getData Error:'+error.message);
		    client.end();
			return;
	}
	if(results.length > 0){
		    for(var i=0;i<results.length;i++){
			   var pe = results[i];
			   console.log('Name :'+pe['name']+' ,Age:'+pe['age']);			
			} 
	}
		 
	});
client.end();
console.log('Connection closed');	


