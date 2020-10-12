const readlineSync = require("readline-sync");

let name = readlineSync.question('Please enter your name : ');
console.log('Hello ' + name);