function Ajax(method, url, data, success, error) {
    //创建ajax对象
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    } catch (error) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //拼接字符串
    function querystring(obj) {
        var str = "";
        for (var attr in obj) {
            str += attr + "=" + obj[attr] + "&";
        }
        return str.substring(0, str.length - 1);
    }

    //判断如果data存在
    if (data) {
        data = querystring(data);
    }

    if (method == "get" && data) {
        url += "?" + data;
    }

    xhr.open(method, url, true);


    if (method = "get") {
        xhr.send();
    } else {
        //在send方法之前设置请求的格式
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }

    //等待数据响应
    xhr.onreadystatechange = function () {
        //判断通信状态
        if (xhr.readyState == 4) {
            //http状态
            if (xhr.status == 200 || xhr.status == 304) {
                //服务器返回文本
                //回调函数
                if (success) { success(xhr.responseText); }
            } else {
                if (error) { error(xhr.status); }
            }
        }
    }
}
