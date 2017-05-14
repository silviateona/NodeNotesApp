console.log('starting notes.js, yo!');
//all files have access to the module object; console.log it to view properties

//console.log(module);

//the module object has an exports object property, which we can access from other files
//by using the variable in which we required this file, ex. notes.age
module.exports.age = 31;

//and now, let's create an anonymous function for exports
//anonymous functions are by default considered for errors
module.exports.addNote = ()=>{
   console.log('ze addNote function accessed');
   return 'A brand-new note returned here, yo!';
};

module.exports.addNumbers = (a, b)=>{
   return a+b;
}
