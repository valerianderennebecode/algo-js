const readlineSync = require("readline-sync");


let name = readlineSync.question("Whats is your name? : ");
let firstName = readlineSync.question("Whats is your first name? : ");
let city = readlineSync.question("Where do you live? : ");


console.log ('"Your name is ' + firstName + ' ' + name + ' and you live in ' + city +'."')