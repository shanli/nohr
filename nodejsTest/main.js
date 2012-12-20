var runner = require('../../node_modules/qunit');
runner.run({
    code : '/home/gc/test-n2p/nodejsTest/src/mock.js',
    tests: '/home/gc/test-n2p/nodejsTest/tests/test.js'
}, function(err, report) {
    console.dir(report);
});
