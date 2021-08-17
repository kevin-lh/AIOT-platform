function trans( str){
    var json = JSON.stringify(str);
    var e = new RegExp("{", "g");
    json = json.replace(e, "");
    e = new RegExp("}", "g");
    json = json.replace(e, "");
    json = json.replace("[","{").replace("]","}");
    return json;
}
