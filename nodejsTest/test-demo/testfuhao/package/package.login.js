var qs = require('querystring');

var path = '/index/login/index/?',
    log  = {
        host    : 'api-dev.soquweb.tk',
        headers : {
            apikey : '42A90DCC-3C19-E9A4-BDC6-8CC7F7800273'
        }
    };

// 必要参数
exports.log_1_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'liuxiang', password: 'liuxiangpassword'
    })
};

// 测试没有apikey
exports.log_2_in = function () {
    return {
        host    : 'api-dev.soquweb.tk',
        path    : '/index/login/index/?' + qs.stringify({
            type: 1, username: 'liuxiang', password: 'liuxiangpassword'
        })
    }
};

// 没有传递username
exports.log_3_in = function () {
    return getLoginObj(path, log, {
        type: 1, password: 'liuxiangpassword'
    })
};

// username=''
exports.log_4_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: '', password: 'liuxiangpassword'
    })
};

// username='   '
exports.log_5_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: '      ', password: 'liuxiangpassword'
    })
};

// no password
exports.log_6_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'liuxiang'
    })
};

// password=''
exports.log_7_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'liuxiang', password: ''
    })
};

// password=now
exports.log_8_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'liuxiang', password: Date.now()
    })
};

// 测试错误的apikey
exports.log_9_in = function () {
    return {
        host    : 'api-dev.soquweb.tk',
        path    : '/index/login/index/?' + qs.stringify({
            type: 1, username: 'liuxiang', password: 'liuxiangpassword'
        }),
        headers : {
            apikey : Date.now()
        }
    }
};

// 输入全部正确参数
exports.log_10_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'liuxiang', password: 'liuxiangpassword',
        mac: '111111111111111111111111', guid: 'guid_123',
        udid: 'udid_123', open_udid: 'open_udid_123', device: 1,
        game_server_id: 456, channels: 789, question: 'question_123',
        answer: 'answer_123', phone: 13901421374, email: 'gaochongid@gmail.com',
    })
};

// 输入全部不正确的可选参数
exports.log_11_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'liuxiang', password: 'liuxiangpassword',
        mac: 'gaochongid@gmail.com', guid: Date.now(),
        udid: 'xxx', open_udid: 'xxx_id', device: 11111111,
        game_server_id: 'abc1111', channels: 'aaa789', question: 123,
        answer: 123, phone: 'gaochongid@gmail.com', email: 'abc',
    })
};

function getLoginObj( p, l, param ) {
    l.path = p + qs.stringify( param );
    return l;
}
