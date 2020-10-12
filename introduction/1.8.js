const readlineSync = require("readline-sync");

let vegetable = readlineSync.question("Whats is your favorite vegetable ? : ");
let earth = readlineSync.question("What shape is the earth ? : ");
let drink = readlineSync.question("What do you usually do after smoking a joint ? : ");
let color = readlineSync.question("What color do people become when they are sick on a boat ? : ");
let emotion = readlineSync.question("How do you feel when Umtiti scores a goal against Belgium ? : ");

console.log("THE " + vegetable + " Story",'\n',"The " + vegetable + " is",'\n',"the only dish",'\n', "that isn't flat" ,'\n', "but " + earth + '\n', '\n', drink + " small", '\n', color + " peas off it", '\n', "could make you quite", '\n', emotion)