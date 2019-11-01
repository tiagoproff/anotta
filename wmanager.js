const $ = jQuery = require('jquery');

require('jquery-ui');
require('jquery-ui/ui/widgets/mouse');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');

const notesData = require ('./notes.json');
var notesWindows = [];

notesData.forEach( (element, i) => {
    notesWindows.push(`<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>${element.text} ${++i}</li>`);
});

$(document).ready(() => {
    $('#notes').html(notesWindows.join(''));
    $('#notes').sortable();
    $('#notes').disableSelection();
});