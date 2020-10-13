const readlineSync = require("readline-sync");

let vegetable = readlineSync.question("Whats is your favorite vegetable ? : (Q1/5)");
let earth = readlineSync.question("What shape is the earth ? : (Q2/5)");
let drink = readlineSync.question("What do you usually do after smoking a joint ? : (Q3/5)");
let color = readlineSync.question("What color do people become when they are sick on a boat ? : (Q4/5)");
let emotion = readlineSync.question("How do you feel when Umtiti scores a goal against Belgium ? : (Q5/5)");

console.log("THE " + vegetable + " Story",'\n',"The " + vegetable + " is",'\n',"the only dish",'\n', "that isn't flat" ,'\n', "but " + earth + '\n', '\n', drink + " small", '\n', color + " peas off it", '\n', "could make you quite", '\n', emotion)

// Create a "Story Teller".