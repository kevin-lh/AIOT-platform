const myform=document.querySelector('#myform');
const nameinput=document.querySelector('#Name')
const passwordinput=document.querySelector('#Password');
const msg=document.querySelector('.msg');
const remote = require('electron').remote;
const ipc = require('electron').ipcRenderer
var name='root';
var password='1234';
myform.addEventListener('submit',onSubmit);
    function onSubmit(e){
        e.preventDefault();
        if(nameinput.value===''||passwordinput.value===''){
            alert('请输入用户名和密码');
        }else if(nameinput.value===name&&passwordinput.value===password){
            ipc.send('add');
            remote.getCurrentWindow.hide;
            //window.location.href='../Model/IndexMain.html';
            //win.resize(1000,800);
        }else{
            alert('密码或用户名错误');
            return;
        }
    }




