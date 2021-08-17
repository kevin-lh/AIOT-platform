// 新建窗口
var addBtn = document.querySelector('#addBtn')
addBtn.onclick = function (e) {
    window.open('../Model/AddWork.html','_blank','width=500,height=400,left=550,top=250,toolbar=no,menubar=no,resizable=no,scrollbars=no')
}

//监听事件，增加任务列表
    window.addEventListener('message',(msg)=>{
        var datas = JSON.parse(msg.data)
        //json对象转成array数组data2
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
        for(var k=0;k<4;k++)
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




