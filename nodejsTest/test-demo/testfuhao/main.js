var runner = require('qunit');
/**
runner.run({
    code : './src/reg.js',
    tests: './tests/test.reg.js'
}, function(err, report) {
    console.log('<br>');
    console.log(report);
});

runner.run({
    code : './src/queryapi.js',
    tests: './tests/test.js'
}, function(err, report) {
    console.log('<br>');
    console.log(report);
});
*/
runner.run({
    code : './src/login.js',
    tests: './tests/test.login.js'
}, function(err, report) {
    console.log('<br>');
    console.log(report);
});
