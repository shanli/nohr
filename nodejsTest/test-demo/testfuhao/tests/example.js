/**
 * Created with JetBrains WebStorm.
 * User: gaochong
 * Date: 12-10-9
 * Time: 下午3:33
 * To change this template use File | Settings | File Templates.
 */

test('test ok method', function () {
    /**
     * ok( state, [message] )
     * state: true || false
     * 只有true时通过，并打印message
     */
    ok( 1 == '1', 'ok' )
});

test('test equal method', function () {
    /**
     * equal( actual, expected, message )
     * if actual == expected
     */
    equal( 1, '1', '1 == "1"' )
});

test('test notEqual method', function () {
    /**
     * notEqual( actual, expected, message )
     * if actual != expected
     */
    notEqual( 1, '1', '1 == "1"' )
});

test('test deepEqual method', function () {
    /**
     * deepEqual( actual, expected, message )
     * 主要用于深度比较数组或者对象，简单类型也可以
     * 无论简单类型还是复合类型都会进行深度比较
     * ===
     */
    deepEqual( 1, '1', '1==1' );
    deepEqual( [1, 2, '3'], [1, 2, 3], '[1, 2, "3"] == [1, 2, 3]' );
    deepEqual( {name: '123'}, {name: 123}, 'object' );
});

test('test notDeepEqual method', function () {
    /**
     * notDeepEqual( actual, expected, message )
     * 主要用于比较数组或者对象，简单类型也可以
     * 无论简单类型还是复合类型都不会进行类型校验
     * ==
     */
    notDeepEqual( 1, '1', '1==1' );
    notDeepEqual( [1, 2, '3'], [1, 2, 3], '[1, 2, "3"] == [1, 2, 3]' );
    notDeepEqual( {name: '123'}, {name: 123}, 'object' );
});

asyncTest('test asyncTest method', function () {
    setTimeout(function () {
        strictEqual( 1, '1', '1 === "1"' );
        strictEqual( [1, 2], [1, 2], '[1, 2] === [1, 2]' );
        start();
    }, 1000);
});

test('test strictEqual method', function () {
    /**
     * strictEqual( actual, expected, message )
     * actual, expected 都为简单类型，不能为复合类型
     * 用户严格比较 ===
     * 对比equal
     */
    strictEqual( 1, '1', '1 === "1"' );
    strictEqual( [1, 2], [1, 2], '[1, 2] === [1, 2]' );
});

test('test notStrictEqual method', function () {
    notStrictEqual( 1, '1', '1 === "1"' );
    notStrictEqual( [1, 2], [1, 2], '[1, 2] === [1, 2]' );
});

/**
 * test ajax
 * @param ecallback
 */
function tajax( ecallback ) {
    $.ajax({
        url: 'ajxjserver.php',
        error: ecallback
    });
}
asyncTest('test ajax', function () {
    stop();
    tajax(function () {
        console.log('ok');
        start();
    });
    setTimeout(function () {
        console.log('over')
        start();
    }, 5000);
});
