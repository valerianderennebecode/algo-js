const readlineSync = require("readline-sync");


let number1 = readlineSync.question("give me a number with a decimal : ");
let number2 = readlineSync.question("give me another number with a decimal : ");

console.log(Math.trunc(number1) * number2)