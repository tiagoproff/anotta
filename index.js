const electron = require('electron');
//import electron from 'electron'; // NodeJs not support
const loki = require('lokijs');

const { app, dialog, BrowserWindow, ipcMain } = electron;
//const notesData = require ('./notes.json');


app.on('ready', () => {
    
    

    //console.log('A aplicacao foi criada.');
    const windowManager = new BrowserWindow({
        //frame: false,
        webPreferences: {
            nodeIntegration : true
        }
    });

    windowManager.loadURL(`file://${__dirname}/wmanager.html`);

    ipcMain.on('newNote', (note) => {
        //dialog.showOpenDialog();
    
        const windowNote = new BrowserWindow({
            parent: windowManager,
            //frame: false,
            width: 340, 
            height: 180,
            maximizable: false,
            backgroundColor: '#d7e632',
            webPreferences: {
                nodeIntegration : true
            }
        });

        windowNote.loadURL(`file://${__dirname}/wnote.html`);

        //windowNote.setBackgroundColor('#d7e632')
        console.log(note);
    });
});



/*
var tm = new Date(2018, 11, 16).getTime();
console.log(tm)
*/