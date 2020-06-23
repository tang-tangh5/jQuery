(function(window,undefined){ // 传入undefined的原因是解决它在IE中存在被篡改的问题
    var jQuery = function(selector){
        return new jQuery.fn.init(selector)
    }

    jQuery.fn = jQuery.prototype = {
        extend: function(obj){
            for(var key in obj){
                this[key] = obj[key];
            }
        }
    };
    // 增加方法
    jQuery.fn.extend(
        {
            html:function(){
                console.log('这是JQ的html的方法');
            }
            css: function(){
                console.log('这是JQ的css方法');
            }
        }
    );

    jQuery.fn.init = function(selector){
        var elements = document.querySelectorAll(selector);
        
        // 遍历将获取的元素放到实例对象上
        for(var i = 0; i<elements.length;i++){
            this[i] = elements[i];
        }
        // 手动给实例对象添加length属性
        this.length = elements.length;
    };

// 修改init构造函数的原型，改成jQuery.prototype
jQuery.fn.init.prototype = jQuery.fn;

// 将函数内部的局部变量导出到外部，让全局都可以使用
window.jQuery = window.$ = jQuery;
})(window); // 将window作为实参传入到函数中，减少对window的查找过程，有利于代码压缩