(function (window, undefined) {
var document = window.document,
    navigator = window.navigator,
    location = window.location;

var jQuery = (function () {
    
var jQuery = function ( selector ) {
    return new jQuery.prototype.init( selector );
},
toString = Object.prototype.toString,
hasOwn = Object.prototype.hasOwnPrototype,
push = Array.prototype.push,
slice = Array.prototype.slice,
indexOf = Array.prototype.indexOf,

rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
isReady =  /complete|loaded|interactive/,

// 用于存放各种数据类型，比如Array, Object Number...
class2type = {};

// jQuery构造函数的原型对象
jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    init: function ( selector ) {
        // '', null, undefined
        if ( !selector ) {
            return this;
        }
        // body
        if ( selector === 'body' ) {
            this[0] = document.body;
            this.length = 1;
            this.selector = selector;
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
                this.selector = selector;
                selector = document.querySelectorAll(selector);
            }
            // 将获得的对象合拼到当前jQuery对象中，并返回当前jQuery对象
            return jQuery.merge(this, selector);
        }
        if ( typeof selector === 'function' ) {
            return jQuery.fn.ready( selector );
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
    },
    find: function ( selector ) {
        return jQuery( this.selector + ' ' + selector );
    },
    ready: function ( callback ) {
        if ( isReady.test(document.readyState) ) {
            callback( jQuery );
        } else {
            jQuery(document).on('DOMContentLoaded', function () {
                callback( jQuery );
            });
        }
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
    },
    // TODO
    Event: function ( type ) {
        var event = document.createEvent('Events');
        event.initEvent(type, true, true, null, null, null, null, null, null, null, null, null, null, null, null);
        return event;
    }
});

// 增加class2type 基本数据类型的map
jQuery.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object'], function (i, name) {
    class2type[ '[object ' +name+ ']' ] = name.toLowerCase();
});

/**
 * [jQueryEventsHandler     事件处理器的句柄]
 * @param  {[type]} event   [description]
 * @attribute [event.type], value 处理事件所需参数
 * @return {Boolean}        [description]
 */
// TODO
/**
 * 与jQuery不同，jQuery中传递给事件处理器的data最终会在event.data中
 * 这个处理函数会得到两个参数(event, data)，data为传递给事件处理器的参数
 */
function jQueryEventsHandler( event ) {
    var arr = jQueryEventsHandler[event.type],
        target = event.target;
    if ( !arr ) {
        return false;
    }
    for ( var i = 0, len = arr.length; i < len; i++ ) {
        var selectorArr = null,
            current = arr[i]
            types = current[0],
            fn = current[1],
            data = current[2],
            selector = current[3],
            one = current[4];

        event.data = data;
        if ( selector == null ) {
            this == target && fn.call(target, event);
        } else if ( selector.charAt(0) == '.' && target.className.indexOf(selector.slice(1)) != -1 ) {
            // .className
            fn.call(target, event);
        } else if ( selector.charAt(0) == '#' && target.id == selector.slice(1) ) {
            // #demo
            fn.call(target, event);
        } else if ( target.nodeName.toLowerCase() === selector.toLowerCase() ) {
            // div, p, em ...
            fn.call(target, event);
        } else {
            // div.className
            selectorArr = selector.split('.');
            if ( selectorArr.length === 2 ) {
                if ( target.className.indexOf(selectorArr[1]) != -1 && target.nodeName.toLowerCase() === selectorArr[0] ) {
                    fn.call(target, event);
                }
            }
        }
        if ( one === 1 ) {
            jQuery.fn.removeEvent.call( this, types, fn, selector );
        }
    }
    return (arr = undefined);
}

// events
jQuery.fn.extend({
/**
 * [addEvent 给目标元素添加事件]
 * @param  {string}   types    事件类型
 * @param  {Function} fn       事件处理函数
 * @param  {Object}   data     传递给事件处理函数的参数
 * @param  {string}   selector 事件代理目标
 * @param  {number}   one      仅处理一次事件，随后移除
 * @return {jQuery Object}     当前的jQuery对象
 */
// 请使用 on
addEvent: function ( types, fn, data, selector, /*INTERNAL*/ one ) {
    if ( typeof jQueryEventsHandler[types] === 'undefined' ) {
        jQueryEventsHandler[types] = [ [types, fn, data, selector, one] ];
    } else {
        jQueryEventsHandler[types].push( [types, fn, data, selector, one] );
    }
    this.addEventListener( types, jQueryEventsHandler, false );
},
/**
 * [removeEvent 销毁处理事件]
 * @param  {[type]}   types    事件类型
 * @param  {Function} fn       事件处理函数
 * @param  {string}   selector 事件代理目标
 * @return {jQuery Object}     当前的jQuery对象
 */
// 请使用 off
removeEvent: function ( types, fn, selector ) {
    var jeht = jQueryEventsHandler[types];
    if ( typeof jeht === undefined ) {
        return false;
    }
    jeht = jeht[0];
    if ( jeht && jeht[3] === selector ) {
        this.removeEventListener(types, jQueryEventsHandler, false);
        delete jQueryEventsHandler[types];
    }
},
/**
 * [on 注册或代理事件处理]
 * @param  {string || object}   types    事件类型 || 事件map
 * @param  {string}   selector           所代理事件的目标仅为string(可选)
 * @param  {object}   data               传递给事件处理器的额外参数(可选)
 * @param  {Function} fn                 事件处理器
 * @return {jQuery Object}               当前的jQuery对象
 */
// example
// $('#demo').on('click', 'em', {e: 'no'}, handle);
on: function ( types, selector, data, fn ) {
    var type, self;
    // ({ mouseover: fn, click: fn }, {data: 'isok'})
    if ( typeof types === 'object' ) {
        if ( typeof selector !== "string" ) {
            // ( types-Object, data )
            data = selector;
            selector = undefined;
        }
        for ( type in types ) {
            this.on( type, selector, data, types[ type ] );
        }
        return this;
    }

    // ( types, fn )
    if ( data == null && fn == null ) {
        fn = selector;
        data = selector = undefined;
    } else if ( fn == null ) {
        if ( typeof selector === 'string' ) {
            // ( types, selector, fn )
            fn = data;
            data = undefined;
        } else {
            // ( types, data, fn )
            fn = data;
            data = selector;
            selector = undefined;
        }
    }
    self = this;
    return this.each(function () {
        self.addEvent.call( this, types, fn, data, selector );
    });
},
/**
 * [off 取消或销毁处理事件]
 * @param  {string || object}   types    事件类型 || 事件map
 * @param  {string}   selector           所代理事件的目标仅为string(可选)
 * @param  {Function} fn                 销毁事件处理器
 * @return {jQuery Object}               当前的jQuery对象
 */
// example
// $(this).off('click', 'em', handle);
off: function ( types, selector, fn ) {
    var self;
    if ( typeof types === 'object' ) {
        for ( var type in types ) {
            this.off( type, selector, fn );
        }
        return this;
    }
    // ( types [, fn] )
    if ( selector === false || typeof selector === 'function' ) {
        fn = selector;
        selector = undefined;
    }
    // todo
    if ( fn === false ) {

    }
    self = this;
    return this.each(function () {
        self.removeEvent.call( this, types, fn, selector );
    });
},
/**
 * [one 只执行一次事件处理器]
 * @param  {string}   types              事件类型
 * @param  {string}   selector           所代理事件的目标仅为string(可选)
 * @param  {object}   data               传递给事件处理器的额外参数(可选)
 * @param  {Function} fn                 事件处理器
 * @return {jQuery Object}               当前的jQuery对象
 */
// example
// $('#demo').one('click', 'em', {e: 'ok'}, handle);
one: function ( types, selector, data, fn ) {
    var self = this;
    return this.each(function () {
        self.addEvent.call( this, types, fn, data, selector, 1 );
    });
},
trigger: function ( type, data ) {
    if ( typeof type === 'string' ) {
        type = $.Event(type);
        type.data = data;
        return this.each(function () {
            this.dispatchEvent(type);
        });
    }
}



});

// todo 基本的dom操作方法
// todo ajax处理机制




window.$ = window.jQuery = jQuery;
})();
})(window)
