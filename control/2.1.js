const readlineSync = require("readline-sync");

let age = readlineSync.question("What is your age ? : ")

if (age >= 18) {
    console.log ("You are an adult");
} else {
    console.log ("you are not yet an adult");
}

// Ask the user to enter its age. If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an adult".