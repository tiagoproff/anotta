const electron = require('electron');
//import electron from 'electron'; // NodeJs not support

const {app} = electron;

app.on('ready', () => {
    console.log('====================================');
    console.log('A aplicacao foi criada.');
    console.log('====================================');
})