const { ipcRenderer } = require('electron');
const $ = jQuery = require('jquery');
ipcRenderer.on('fillNote', (evt, note) => {
    console.log(note);
});
$(document).ready(() => {
    ipcRenderer.on('fillNote', (evt, note) => {
        console.log(11, note.text);

        $('body').html(note.text);
    });
});