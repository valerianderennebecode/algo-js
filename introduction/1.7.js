const readlineSync = require("readline-sync");

let shoesize = new Number(readlineSync.question("What is your shoe size ? : "));
let birthyear = new Number(readlineSync.question("What is your year of birth ? : "));

console.log(((((shoesize * 2) + 5) * 50) - birthyear) + 1766)

// Ask to the user its shoe size and its birth year. Then make the following calculation:

//Multiply the shoe size by 2
// Add 5 to the result
// Multiply that by 50
// Subtract the birth year
// Add 1766
// Test with your own birth year and your shoe size.