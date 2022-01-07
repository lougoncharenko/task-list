//set local storage
localStorage.setItem('name', 'John');
localStorage.setItem('age', '39');
//stays in storage until you clsar it

//set session storage
sessionStorage.setItem('name', 'Beth');
//only stores during the session

//remove fro local storage
// localStorage.removeItem('name');


//get from storage
const name=localStorage.getItem('name');
const age=localStorage.getItem('age');
console.log(name, age);

//clear local storage
localStorage.clear();