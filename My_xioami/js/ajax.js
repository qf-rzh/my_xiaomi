/*
    type: 'get',
    data: {}
    success: function(){},
    error: function(){},
    complete: function(){}
*/

function sendAjax(url, options) {
    var xhr = new XMLHttpRequest();
    var __default = {
        type: 'GET',
        data: null,
        contentType: 'json'
    }
    // 传进来的值和默认值进行合并
    Object.assign(__default, options);
    // console.log(__default);
    // get请求, 是对url进行拼接
    // xxxx?aa=bb&cc=dd(键值对)
    if(__default.type.toUpperCase() == 'GET') {
        var flag = url.indexOf('?') > -1 ? '&' : '?';
        // 时间戳, 解决的get请求的缓存问题
        url += `${flag}_=${Date.now()}`;
        
        for(var key in __default.data) {
            url += `&${key}=${__default.data[key]}`;
        }
        __default.data = null;
    } else if(__default.type.toUpperCase() == 'POST') {
        
        __default.data = JSON.stringify(__default.data);
    }
    console.log(url);
    xhr.open(__default.type, url, true);
    xhr.send(__default.data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                //请求成功
                var data = xhr.responseText;
                __default.success && __default.success(data);
                // if(__default.success) {
                //     __default.success(data)
                // }
            } else {
                // 请求失败
                __default.error && __default.error(data);
            }
            __default.complete && __default.complete(data);
        }
    }

}