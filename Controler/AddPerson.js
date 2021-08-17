//向后台发送数据，发送post请求
var addTask = document.querySelector('#addTask')
var postTask = document.querySelector("#postTask")
//var http = require('http')
var querystring = require('querystring');
function getTwo(){
    var user_name = $("#input2").val();
    var user_age = $("#input3").val();
    var user_device = $("#input4").val();
    var user_workage = $("#input5").val();
    var user_worktype = $("#input6").val();
    var user_projectin = $("#input7").val();
    var user_badhabit = $("#input8").val();
    var str = [];
    str.push({user_name,user_age,user_device,user_workage,user_worktype,user_projectin,user_badhabit})
    var json = trans(str);
    return json;
};
postTask.onclick = function (){
    //键值对数组转为json对象
    var datas = JSON.parse(getTwo())
    //json对象转为json字符串
    var data = querystring.stringify(datas)
    //console.log(querystring.stringify(data))
    ajaxPsot('http://120.26.66.201:11331/add_user/',data,function (xhr){
        var str = xhr.responseText;
        var a = JSON.parse(str)
        //alert(a.status)
        if(a.status==true){
            alert("导入人员成功！"+"\n"+"----------------"+"\n"+a.message)
        }
        else {
            alert("导入人员失败！"+"\n"+"----------------"+"\n"+a.message)
        }
    },function (error){
        console.log(error.responseText);
        console.log(error.statusText);
    })
}
