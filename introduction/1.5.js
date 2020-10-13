const readlineSync = require("readline-sync");


let number1 = readlineSync.question("give me a number with a decimal : ");
let number2 = readlineSync.question("give me another number with a decimal : ");

console.log(Math.trunc(number1) * number2)

// Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

