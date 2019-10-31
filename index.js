const electron = require('electron');
//import electron from 'electron'; // NodeJs not support

const {app, BrowserWindow} = electron;

app.on('ready', () => {
    //console.log('A aplicacao foi criada.');
    const windowMenu = new BrowserWindow({});
    windowMenu.loadURL(`file://${__dirname}/wmanager.html`);
})