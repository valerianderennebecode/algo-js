
const readlineSync = require("readline-sync");

  function calcSurface(a, b) {
      return a * b;
  }

let a = readlineSync.question("Give me a lenght : ") ;
let b = readlineSync.question("give me a width : ") ;

console.log("Your rectangle is " + calcSurface(a, b) + " m2.")



  // calcSurface calculate the surface of any thing