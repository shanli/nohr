var qs = require('querystring');

var path = '/index/login/register?',
    log  = {
        host    : 'api-dev.soquweb.tk',
        headers : {
            apikey : 'E6CD465C-50F2-ADD2-63D5-D7FD525B0C94'
        }
    };

// 必要参数
exports.log_1_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'test'+Date.now(), password: '123'
    })
};

// 测试没有apikey
exports.log_2_in = function () {
    return {
        host    : 'api-dev.soquweb.tk',
        path    : '/index/login/register?' + qs.stringify({
            type: 1, username: 'test'+Date.now(), password: '123'
        })
    }
};

// 没有传递username
exports.log_3_in = function () {
    return getLoginObj(path, log, {
        type: 1, password: '123'
    })
};

// username=''
exports.log_4_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: '', password: '123'
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
        type: 1, username: 'test*', password: ''
    })
};

// password=now
exports.log_8_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'test*', password: Date.now()
    })
};

// 测试错误的apikey
exports.log_9_in = function () {
    return {
        host    : 'api-dev.soquweb.tk',
        path    : '/index/login/register?' + qs.stringify({
            type: 1, username: 'test*', password: '123'
        }),
        headers : {
            apikey : Date.now()
        }
    }
};

// 输入全部正确参数
exports.log_10_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'test*', password: '123',
        mac: '111111111111111111111111', guid: 'guid_123',
        udid: 'udid_123', open_udid: 'open_udid_123', device: 1,
        game_server_id: 456, channels: 789, question: 'question_123',
        answer: 'answer_123', phone: 13901421374, email: 'gaochongid@gmail.com',
    })
};

// 输入全部不正确的可选参数
exports.log_11_in = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'test*', password: '123',
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

// 必选参数
exports.log_in_01 = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'test'+Date.now(), password: '123'
    })
};

// 必选参数:用户已经存在
exports.log_in_02 = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'test', password: '123'
    })
};

//没有header
exports.log_in_03 = function () {
    return {
        host    : 'api-dev.soquweb.tk',
        path    : '/index/login/register?' + qs.stringify({
            type: 1, username: 'test'+Date.now(), password: '123'
        })
    }
};

//错误header
exports.log_in_04 = function () {
    return {
        host    : 'api-dev.soquweb.tk',
        path    : '/index/login/register?' + qs.stringify({
            type: 1, username: 'test'+Date.now(), password: '123'
        }),
        headers : {
            apikey : '123'
        }
    }
};

// 必选参数:type为空
exports.log_in_05 = function () {
    return getLoginObj(path, log, {
        type: null, username: 'test'+Date.now(), password: '123'
    })
};

// 必选参数:type错误
exports.log_in_06 = function () {
    return getLoginObj(path, log, {
        type: -1, username: 'test'+Date.now(), password: '123'
    })
};

// 必选参数:username为空
exports.log_in_07 = function () {
    return getLoginObj(path, log, {
        type: 1, username: '', password: '123'
    })
};

// 必选参数:没有username
exports.log_in_08 = function () {
    return getLoginObj(path, log, {
        type: 1, password: '123'
    })
};

// 必选参数:password为空
exports.log_in_09 = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'test'+Date.now(), password: ''
    })
};

// 必选参数:没有password
exports.log_in_10 = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'test'+Date.now()
    })
};

//特殊字符控制。。。

// 输入正确可选参数
exports.log_in_11 = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'test'+Date.now(), password: '123',
        mac: '111111111111111111111111', guid: 'guid_123',
        udid: 'udid_123', open_udid: 'open_udid_123', device: 1,
        game_server_id: 456, channels: 789, question: 'question_123',
        answer: 'answer_123', phone: 13901421374, email: 'zhaoxuetian@adsage.com'
    })
};

// 输入不正确的可选参数
exports.log_in_12 = function () {
    return getLoginObj(path, log, {
        type: 1, username: 'test'+Date.now(), password: '123',
        mac: 'zhaoxuetian@adsage.com', guid: Date.now(),
        udid: 'xxx', open_udid: 'xxx_id', device: 11111111,
        game_server_id: 'abc1111', channels: 'aaa789', question: 123,
        answer: 123, phone: 'zhaoxuetian@adsage.com', email: 'abc'
    })
};
