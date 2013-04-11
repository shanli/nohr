var redis   = require('redis'),
    client  = redis.createClient('6379', '220.231.5.61');
client.auth('pub_1qaz@WSX', function () {
    client.get('47c6435c34ffb505059ec7f1dfb397d4', function (err, reply) {
            console.log(reply);
            client.end();
    });
});

console.log('--------------')
/**
var redis = require('redis'), 
    client = redis.createClient(6379, '220.231.5.61'); 
client.auth('pub_1qaz@WSX', function() {
    console.log("Connected!");
});
*/
