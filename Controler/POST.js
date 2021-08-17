function ajaxPsot (url,data,success,error){
    var xmlhttp= new XMLHttpRequest();
    xmlhttp.open("post",url,true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    xmlhttp.send(data);
    xmlhttp.onreadystatechange = function () {
        // 这步为判断服务器是否正确响应
        if(xmlhttp.readyState===4){
            if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status===304){
                success(xmlhttp);
            }else{
                error(xmlhttp)
            }
        }
    };
}