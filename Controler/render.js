function accessWeb(){
    const{net} = require('electron').remote;
    const request = net.request('http://gfapi.mlogcn.com/function/v001/poi?lonlat=116.55,39.88&key=APIKEY&output_type=json');
    request.on('response',(response )=>{
        console.log(`**statusCode:${response.statusCode}`);
        console.log(`**header:${JSON.stringify(response.headers)}`);
        response.on("data",(chunk)=>{
            console.log("接收到数据",chunk.toJSON());
    })
            response.on('end',()=>{
                console.log("数据接收完成");
    })

    });
    request.end();
}

function getWeather(){
    // $.GET({
    //     type: "GET",
    //     url: "http://wthrcdn.etouch.cn/weather_mini?citykey=101280101",
    //     success: function(res){
    //         console.log(res);
    //         for(i in res.data){
    //             var tr;
    //             tr='<td>'+res.data[i].date+'</td>'+'<td>'+res.data[i].high+'</td>';
    //             $("#tabletest").append('<tr>'+tr+'</tr>');
    //         }
    //     }
    // });
    //window.onload = function(a){
        var Owendu=document.querySelector("#wendu");
        var Oattention =document.querySelector("#attention");
        var btn = document.querySelector("#getWeather");
            GET("http://wthrcdn.etouch.cn/weather_mini?citykey=101280101",function(xhr){
                console.log(xhr.responseText);
                var str = xhr.responseText;
                var obj = JSON.parse(str);
                console.log(obj.data.wendu);
                Owendu.innerHTML=obj.data.wendu;
                Oattention.innerHTML=obj.data.ganmao;
            },function(xhr){
                alert("error");
            })
    //}
}
