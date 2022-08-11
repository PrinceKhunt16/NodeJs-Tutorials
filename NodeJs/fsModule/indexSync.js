const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const dummy = readFileSync('./dummy.txt', 'utf-8');
const dummyTwo = readFileSync('./dummyTwo.txt', 'utf-8');

writeFileSync('./dummyThree.txt', `${dummy} and more ${dummyTwo}`, {flag: 'a'});

console.log(dummy); 
console.log(dummyTwo);

console.log('done with this task'); 
console.log('starting the next one');