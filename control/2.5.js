const readlineSync = require("readline-sync");

let favnum = readlineSync.question("What is your favorite number ? : ");

do {
    console.log(favnum = readlineSync.question("Are you sure ? What is your favorite number ? : "));
}

while (favnum !== "42");

// Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).
