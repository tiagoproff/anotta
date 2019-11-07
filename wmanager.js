const { ipcRenderer } = require('electron');
const $ = jQuery = require('jquery');
const loki = require('lokijs');

require('jquery-ui-dist/jquery-ui');

$(document).ready(() => {
    const notesData = require ('./notes.json');
    let notesWindows = [];

    const db = new loki('notes');
    //Create a collection, specifying name, Type, index fields and whether the collection is transactional:

    const notes = db.addCollection({ indices: ['cod'] }, 'text', 'data', 'type');
    // note that indices can be a single string or an array of strings

    /*
    notes.insert( { cod : 0, text : 'Tanquinho', date: '1577757600000', type: 'normal' } );
    notes.insert( { cod : 2, text : 'Site Adriana Oliveira ( André )', date: '1577757600000', type: 'normal' } );
    notes.insert( { cod : 8, text : 'Game PixiJS', date: '1577757600000', type: 'normal' } );
    */

    const dbdata = notes.find({'cod': 0});

    console.log(notes, dbdata, 52);

    notesData.forEach( (element, i) => {
        notesWindows.push(`<li class="ui-state-default normal" contenteditable="true">${element.text} ${++i}</li>`);
    });

    $('#notes').html(notesWindows.join(''));
    $('#notes').sortable();
    $('#notes').disableSelection();

    $('#notes li').each(function(note) {
        $(this).on('dblclick', function(){
            ipcRenderer.send('newNote', this.id);
            console.log('Clicked');
        });
    });
});

/*
$.ajax({
  type: "POST",
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
//http://www.fabricadecodigo.com/json-server/
*/