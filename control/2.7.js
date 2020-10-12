const readlineSync = require("readline-sync");

let n = new Number (readlineSync.question("Enter a number : "));
let y = new Number (readlineSync.question("Enter a number : "));

while (y < n ) {
    console.log(new Number (readlineSync.question("Enter a number : ")));
    y +=1
}



// Make a program that ask the user to enter a number named n. Then ask him 
// n time to enter a new number. At the end display the sum of all the 
// numbers collected this way.