function GET(url, success, error){
    var xmlhttp  = new XMLHttpRequest();
    xmlhttp.open("get",url,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(a2){
        if(xmlhttp.readyState===4){
            if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status===304){
                success(xmlhttp);
            }else{
                error(xmlhttp)
            }
        }
    }

}