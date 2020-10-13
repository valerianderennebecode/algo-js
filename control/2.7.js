const readlineSync = require("readline-sync");
let total=0;
let n = new Number (readlineSync.question("Enter a number : "));


for (let i = 0 ; i < n ; i++) {
    total += (new Number (readlineSync.question("Enter a number : ")));
}

console.log(total);




// Make a program that ask the user to enter a number named n. Then ask him 
// n time to enter a new number. At the end display the sum of all the 
// numbers collected this way.