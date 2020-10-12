const readlineSync = require("readline-sync");

let favnum = readlineSync.question("What is your favorite number ? : ");

do {
    console.log(favnum = readlineSync.question("Are you sure ? What is your favorite number ? : "));
}

while (favnum !== "42");