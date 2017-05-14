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

//some command line magics: u can run app:
//node app.js winnie
//and get access to the winnie argument by using the process.argv (remember, process is like document in the web browser)
console.log(process.argv);
//we can see that our fancy commandline item is in the third position
//of the process.argv object
var command = process.argv[2];
console.log('command: ', command);

//now we can do stuff depending on the item passed in the commandline
//for example, we can run app as: node app.js add, or node app.js list
if(command ==='add'){
   console.log('Adding a new Note!');
}else if(command ==='list'){
   console.log('Listing all notes!');
}else if (command ==='read'){
   console.log('Reading an individual note!');
}else if(command === 'remove'){
   console.log('Removing a note.');
}else if(command == undefined){
   console.log('Ye forgot to give ze command, fool!');
}else{
   console.log('command not recognized :/');
}
