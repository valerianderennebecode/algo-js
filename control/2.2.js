const readlineSync = require("readline-sync");

let min = new Number (readlineSync.question("Enter one number  : "));
let max = new Number (readlineSync.question("Enter one other number  : "));
let other = new Number (readlineSync.question("Enter one other other number  : "));

if ((max > other) && (min < other)) {
    console.log(other);
} else if (min > max) {
    console.log ("You are retarded")
}