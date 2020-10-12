const readlineSync = require("readline-sync");

let number1 = readlineSync.question("Give me a number wihtout decimal : ");
let number2 = readlineSync.question("Give me aother number wihtout decimal : ");

console.log(Math.trunc(number1 / number2))