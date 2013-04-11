//zxt 最新的测试注册接口

var runner = require('qunit');
runner.run({
    code : './src/reg.js',
    tests: './tests/test.reg.js'
}, function(err, report) {
    console.log('<br>');
    console.log(report);
});
