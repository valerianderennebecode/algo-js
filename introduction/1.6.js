const readlineSync = require("readline-sync");

let number1 = readlineSync.question("Give me a number wihtout decimal : ");
let number2 = readlineSync.question("Give me aother number wihtout decimal : ");

console.log(Math.trunc(number1 / number2))

// Ask two integers to the user. Display the rest of the integer division of the two numbers.

