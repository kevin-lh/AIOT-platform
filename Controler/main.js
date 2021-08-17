const { app, BrowserWindow,Menu } = require('electron')
const path = require('path')
const url = require('url')
const ipc = require('electron').ipcMain
const remote = require('electron').remote;
function createWindow () {
    global.win = new BrowserWindow({
        width: 1015,
        height: 600,
        frame: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule:true
        }
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../Model/Index.html'),
        protocol: 'file:',
        slashes: true
    }));
   // win.loadFile(url.format(__dirname,'')
    //开发者选项
    //win.webContents.openDevTools()
}
ipc.on('add',()=>
{
    let newwin = new BrowserWindow({
        width: 1200,
        height: 720,
        parent: win, //win是主窗口
        frame: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule:true
        }
    })
    win.webContents.openDevTools()
    win.hide();
    newwin.loadURL(url.format({
        pathname: path.join(__dirname, '../Model/demo03.html'),
        protocol: 'file:',
        slashes: true
    }));
    //newwin.loadURL(path.join('file:',__dirname,'../Model/IndexMain.html')); //new.html是新开窗口的渲染进程
    newwin.on('closed',()=>{newwin = null})
})
app.commandLine.appendSwitch('ignore-certificate-errors');
app.whenReady().then(createWindow)
Menu.setApplicationMenu(null)//取消菜单栏
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})





