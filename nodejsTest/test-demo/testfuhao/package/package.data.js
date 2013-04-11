var md5 = require('./md5.js');
exports.cfginfo = [{
	title : "test1",
    params : {
        type : 1,
        username : "var", 
        password : "md5:123456"
    },
    urlinfo : {
        host    : "api-dev.soquweb.tk",
        path    : "/index/login/register",
        headers : {
            apikey : "BD5E86B1-A33F-4F75-8851-9B3604E7F030"
        }
    },
    resdata : {
        success     : "0",
        ErrorCode   : "-9",
        Reason      : "用户被占用"
    }
},
{
  title : "test2",
    params : {
        type : 1,
        username : "var", 
        password : "md5:123456"
    },
    urlinfo : {
        host    : "api-dev.soquweb.tk",
        path    : "/index/login/register",
        headers : {
            apikey : "B956F112-3608-E002-4572-6699B51F830A"
        }
    },
    resdata : {
        success     : "0",
        ErrorCode   : "-9",
        Reason      : "用户被占用"
    }
},
{
  title : "test3",
    params : {
        type : 1,
        username : "var", 
        password : "md5:123456"
    },
    urlinfo : {
        host    : "api-dev.soquweb.tk",
        path    : "/index/login/register",
        headers : {
            apikey : "B956F112-3608-E002-4572-6699B51F830A"
        }
    },
    resdata : {
        success     : "0",
        ErrorCode   : "-9",
        Reason      : "用户被占用"
    }
}];


function setParamsStr(params){ 
	var _str = ""; 
	for(var kv in params){
		//console.log(kv);
		//console.log(params[kv]); 
		if(params[kv] != -1){
			if(params[kv] == "var" ){
				_str += kv + "=" + "user" + (new Date()).getTime() + "&";
			}else if(typeof  params[kv] == "string" && params[kv].toLowerCase().indexOf("md5") != -1) {
				var pwd = params[kv].split(":")[1];
				_str += kv + "=" + md5.hex_md5(pwd) + "&";
			}else {
				_str += kv + "=" + params[kv] + "&"; 
			} 
		}
	} 
	var _str = _str.substring(0, _str.length-1); 
	return _str; 
}

function clone(myObj){
  if(typeof(myObj) != 'object') return myObj;
  if(myObj == null) return myObj;
  
  var myNewObj = new Object();
  
  for(var i in myObj)
     myNewObj[i] = clone(myObj[i]);
  
  return myNewObj;
}

function clone2(item) { 
    if (!item) { return item; } // null, undefined values check 
 
    var types = [ Number, String, Boolean ],  
        result; 
 
    // normalizing primitives if someone did new String('aaa'), or new Number('444');    
    //一些通过new方式建立的东东可能会类型发生变化，我们在这里要做一下正常化处理 
    //比如new String('aaa'), or new Number('444') 
    types.forEach(function(type) { 
        if (item instanceof type) { 
            result = type( item ); 
        } 
    }); 
 
    if (typeof result == "undefined") { 
        if (Object.prototype.toString.call( item ) === "[object Array]") { 
            result = []; 
            item.forEach(function(child, index, array) {  
                result[index] = clone( child ); 
            }); 
        } else if (typeof item == "object") { 
            // testign that this is DOM 
            //如果是dom对象，那么用自带的cloneNode处理 
            if (item.nodeType && typeof item.cloneNode == "function") { 
                var result = item.cloneNode( true );     
            } else if (!item.prototype) { // check that this is a literal 
                // it is an object literal       
            //如果是个对象迭代的话，我们可以用for in 迭代来赋值 
                result = {}; 
                for (var i in item) { 
                    result[i] = clone( item[i] ); 
                } 
            } else { 
                // depending what you would like here, 
                // just keep the reference, or create new object 
                //这里解决的是带构造函数的情况，这里要看你想怎么复制了，深得话，去掉那个false && ，浅的话，维持原有的引用，                 
                //但是我不建议你去new一个构造函数来进行深复制，具体原因下面会解释 
                if (false && item.constructor) { 
                    // would not advice to do that, reason? Read below 
                    //朕不建议你去new它的构造函数 
                    result = new item.constructor(); 
                } else { 
                    result = item; 
                } 
            } 
        } else { 
            result = item; 
        } 
    } 
    return result; 
}

exports.clone = clone;
exports.clone2 = clone2;
exports.setParamsStr = setParamsStr;
