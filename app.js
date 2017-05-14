console.log('starting app.js, yo!');

//fetch contents of fs aka file system nodejs module and put in constant
const zeFS = require('fs');

//require our very own notes.js file, with a relative path to the current file
//requiring this file will run all code written in it!
const notes = require('./notes.js');

//making use of the addNote function in the notes.js file:
var notesAddNote = notes.addNote();

//let's include a third party library installed through npm into project!!

const _=require('lodash');
