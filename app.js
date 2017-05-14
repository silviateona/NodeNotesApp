console.log('starting app.js, yo!');

//fetch contents of fs aka file system nodejs module and put in constant
const zeFS = require('fs');
//fetch the Operating System module
const zeOS = require('os');

//require our very own notes.js file, with a relative path to the current file
//requiring this file will run all code written in it!
const notes = require('./notes.js');

//userInfo() is a method from the OS module
//it returns an object with properties such as the user name and home directory
var user = zeOS.userInfo();
//console.log(user); //prints an object
console.log(`Hey there ${user.username}! Your old ass is already ${notes.age}!`);

//making use of the addNote function in the notes.js file:
var notesAddNote = notes.addNote();

/*
appendFile is a method from the File System module (fs)
the \r is a return to get a new line
ze traditional way to write this:
'\rHello there, '+user.username+'! This be JS fooling with yer files.'
*/

/*
zeFS.appendFile('greetings.txt', `\rHey there, ${user.username}! Ain't ES6 nice???`, (err)=>{
   if(err){
      console.log('ze error meanz no writings to greetings file!');
   }
});
*/
