const readlineSync = require("readline-sync");

let shoesize = new Number(readlineSync.question("What is your shoe size ? : "));
let birthyear = new Number(readlineSync.question("What is your year of birth ? : "));

console.log(((((shoesize * 2) + 5) * 50) - birthyear) + 1766)