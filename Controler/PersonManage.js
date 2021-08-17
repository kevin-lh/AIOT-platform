var Search = document.querySelector("#search")
var http = require('http');
var querystring = require('querystring');
var postTask = document.querySelector("#postTask")
var adduser = document.querySelector('#adduser')

//新建窗口,父窗口显示
adduser.onclick = function (e) {
    window.open('../Model/AddPerson.html','_blank','width=500,height=600,left=550,top=250,toolbar=no,menubar=no,resizable=no,scrollbars=no')
}
//监听事件，增加任务列表
window.addEventListener('message',(msg)=>{
    var datas = JSON.parse(msg.data)
    //json对象转成array数组data2
    console.log(datas)
    var data2 = [];
    for (let i in datas) {
        let o = {};
        o[i] = datas[i];
        data2.push(o)
    }
    console.log(data2)
    //获取每个object的键值保存到data3
    var data3=[];
    for (var i of data2) {
        for (var k in i) {
            data3.push(i[k]);
        }
    }
    //往tbody里面创建行
    var tbody=document.querySelector("tbody");
    var tr=document.createElement("tr");
    tbody.appendChild(tr);
    //往tr里创建行，for循环四次，创建四个单元格
    for(var k=0;k<8;k++)
    {
        var td = document.createElement("td");  //创建单元格
        tr.appendChild(td);
        td.innerHTML = data3[k]; //把data3里面的属性值 data3[k]给td
    }
    //创建删除对象
    var td=document.createElement("td");
    tr.appendChild(td);
    td.innerHTML="<a href='javascript:;'>删除</a>";
    var as=document.querySelectorAll("a");
    //实现删除事件
    for(var i=0; i<as.length;i++)
    {
        as[i].onclick=function()
        {
            tbody.removeChild(this.parentNode.parentNode);
        }
    }
})



function get(){
    var user_name = $("#NameID").val()
    var str = [];
    str.push({user_name})
    var json = trans(str);
    return json;
};

Search.onclick = function (){
    var datas = JSON.parse(get())
    var data = querystring.stringify(datas)
    ajaxPsot('http://120.26.66.201:11331/find_user_byName/',data,function (xhr){
        var str = xhr.responseText;
        var json = JSON.parse(str)
        var a=json.message[0]
        console.log(a)
        if(json.status==true){
            alert("查找到人员！"+"\n"+"----------------------"+"\n"+"工号:"+"   "+a.userID+"\n"+"姓名： "+a.name+"\n"+"年龄："+a.age+"\n"+"设备号:"+a.deviceID+"\n"+"任务总数："+a.workCount+"\n"+"已完成任务总数："+a.workFinish)
        }else{
            alert("人员不存在！")
        }
        var a = json.message[0]
    },function (error){
        console.log(error.responseText);
        console.log(error.statusText);
    })
}


