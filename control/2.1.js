const readlineSync = require("readline-sync");

let age = readlineSync.question("What is your age ? : ")

if (age >= 18) {
    console.log ("You are an adult");
} else {
    console.log ("you are not yet an adult");
}