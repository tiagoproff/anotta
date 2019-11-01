const electron = require('electron');
//import electron from 'electron'; // NodeJs not support

const {app, BrowserWindow} = electron;

app.on('ready', () => {
    //console.log('A aplicacao foi criada.');
    const windowMenu = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        }
    });

    windowMenu.loadURL(`file://${__dirname}/wmanager.html`);
})



/*
var tm = new Date(2018, 11, 16).getTime();
console.log(tm)
*/