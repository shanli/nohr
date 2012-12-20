(function (window, undefined) {
var document = window.document,
    navigator = window.navigator,
    location = window.location;

var jQuery = (function () {
    
    var jQuery = function (selector, context) {
        return new jQuery.prototype.init( selector );
    },
    toString = Object.prototype.toString,
    hasOwn = Object.prototype.hasOwnPrototype,
    push = Array.prototype.push,
    slice = Array.prototype.slice,
    indexOf = Array.prototype.indexOf,

    rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

    // 用于存放各种数据类型，比如Array, Object Number...
    class2type = {};

    // jQuery构造函数的原型对象
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function ( selector, context ) {
            // '', null, undefined
            if ( !selector ) {
                return this;
            }
            // body
            if ( selector === 'body' ) {
                this[0] = document.body;
                this.length = 1;
                return this;
            }
            // dom element
            if ( selector.nodeType ) {
                this[0] = selector;
                this.length = 1;
                return this;
            }
            if ( typeof selector === 'string' ) {
                // <div />
                if ( selector.charAt(0) === '<'  && selector.length >= 3 && selector.charAt( selector.length - 1 ) === '>' ) {
                    selector = rsingleTag.exec(selector);
                    if ( selector && selector[1] ) {
                        selector = [ document.createElement( selector[1] ) ];
                    } else {
                        selector = [];
                    }
                } else {
                // #div, .div, div ...
                    selector = document.querySelectorAll(selector);
                }
                // 将获得的对象合拼到当前jQuery对象中，并返回当前jQuery对象
                return jQuery.merge(this, selector);
            }
        },
        length: 0,
        splice: [].splice,

        // 转换成数组
        toArray: function () {
            return slice.call(this, 0);
        },
        // 获取jQuery对象中的第几个DOM元素
        get: function ( num ) {
            return num == null ? this.toArray() : (num >= 0 ? this[ num ] : this[ this.length + num ]);
        },
        each: function ( callback, args ) {
            return jQuery.each(this, callback, args);
        }
    };
    jQuery.fn.init.prototype = jQuery.fn;

// extend
// jQuery类和实例的模块化机制
// 也就是给jQuery类和实例增加属性和方法的机制
jQuery.extend = jQuery.fn.extend = function () {
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;

    if ( typeof target === 'boolean' ) {
        deep = target;
        target = arguments[1] || {};
        i = 2;
    }
    if ( typeof target !== 'object' && !jQuery.isFunction( target ) ) {
        target = {};
    }
    if ( length === i ) {
        target = this;
        --i;
    }
    for ( ; i < length; i+=1 ) {
        if ( (options = arguments[ i ]) != null ) {
            for ( name in options ) {
                src = target[ name ];
                copy = options[ name ];
                
                if ( target === copy ) {
                    continue;
                }

                if ( deep && copy && ( jQuery.isPlainObject( copy ) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                    if ( copyIsArray ) {
                        copyIsArray = false;
                        clone = src && jQuery.isArray(src) ? src : [];
                    } else {
                        clone = src && jQuery.isPlainObject(src) ? src : {};
                    }
                    target[ name ] = jQuery.extend( deep, clone, copy );
                } else if ( copy !== undefined ) {
                    target[ name ] = copy;
                }
            }
        }
    }
};

// 给jQuery添加静态方法
jQuery.extend({
    // 将两个数组或对象合拼到第一个数组或对象中
    merge: function ( first, second ) {
        var i = first.length,
            j = 0;
        if ( typeof second.length === 'number' ) {
            for ( var l = second.length; j < l; j++ ) {
                first[ i++ ] = second[ j ];
            }
        } else {
            while ( second[ j ] !== undefined ) {
                first[ i++ ] = second[ j++ ];
            }
        }
        first.length = i;
        return first;
    },
    // 获取对象的数据类型Number Function...
    type: function ( obj ) {
        return obj == null ? String(obj) : class2type[ toString.call(obj) ] || 'object';
    },
    // 判断参数是否是函数
    isFunction: function ( obj ) {
        return jQuery.type(obj) === 'function';
    },
    // 循环迭代机制
    each: function ( obj, callback, args ) {
        var name, i = 0,
            length = obj.length,
            isObj = length === undefined || jQuery.isFunction( obj );
        if ( args ) {
            if ( isObj ) {
                for ( name in obj ) {
                    if ( callback.apply( obj[name], args ) === false ) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if ( callback.apply( obj[i++], args ) === false ) {
                        break;
                    }
                }
            }
        } else {
            if ( isObj ) {
                for ( name in obj ) {
                    if ( callback.call( obj[name], name, obj[name] ) === false ) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if ( callback.call( obj[i], i, obj[i++] ) === false ) {
                        break;
                    }
                }
            }
        }
        return obj;
    }
});

// 增加class2type 基本数据类型的map
jQuery.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object'], function (i, name) {
    class2type[ '[object ' +name+ ']' ] = name.toLowerCase();

});

window.$ = window.jQuery = jQuery;
})();
})(window)
