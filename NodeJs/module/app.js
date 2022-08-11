const names = require('./names');
const sayHi = require('./sayHi');
const { items } = require('./alternative');
const { person } = require('./alternative');

/*

(function (exports, module, require, __dirname, __filename){
    console.log("hello");

})();

*/

console.log(names);
sayHi(names.john);
console.log(items);
console.log(person);