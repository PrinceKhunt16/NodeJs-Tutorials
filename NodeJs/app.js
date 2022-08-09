const names = require('./module/names');
const sayHi = require('./module/sayHi');
const { items } = require('./module/alternative');
const { person } = require('./module/alternative');

console.log(names);
sayHi(names.john);
console.log(items);
console.log(person);