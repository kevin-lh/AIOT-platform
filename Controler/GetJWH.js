window.onload=function (){
$(document).ready(function () {
    let namespace = '/manager'
    let socket = io.connect('ws://120.26.66.201:11331' + namespace);
    socket.emit('ToServer', {data: 'I\'m connected!'})
    socket.on('ToDevice', function (res) {
        var data = JSON.stringify(res, null, 4);
        var datas = JSON.parse(data);
        var datass = datas.data;
        console.log(datass)
        var data2 = [];
        for (let i in datass) {
            var a = datass[i];
            data2.push(a);
        }
        console.log(data2)
        //console.log(data2[0])
        var JD = data2[6];
        var WD = data2[7];
        var HD = data2[8];

        document.querySelector("#JD").innerHTML=JD;
        document.querySelector("#WD").innerHTML=WD;
        document.querySelector("#GD").innerHTML=HD;
    })
 });
}
