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

var addedNumbers = notes.addNumbers(1, 2);
zeFS.appendFile('greetings.txt', `Ze added numbers total ${addedNumbers}.`,(err)=>{
   if (err){
      console.log('error adding numbers');
   };
});

//let's include a third party library installed through npm into project!!
//don't forget to intitialize github and its repository before doing an npm init in a project folder
//here we used npm install lodash --save, the --save flag updating the package.json file
//use package name as specified in this package.json file
//third party modules install in a new node_modules folder

const _=require('lodash');
//let's use a method from the lodash api, uniq, that filters out all duplicates from an array
var arrayFilter = ['silf', 'shroom', 1, 2, 1, 2, 3];
arrayFilter = _.uniq(arrayFilter);
console.log(`filtered array: ${arrayFilter}`);
