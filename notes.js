console.log('starting notes.js, yo!');
//all files have access to the module object; console.log it to view properties

module.exports.addNote = ()=>{
   console.log('ze addNote function accessed');
   return 'A brand-new note returned here, yo!';
};
