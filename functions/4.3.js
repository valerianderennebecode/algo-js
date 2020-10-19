const readlineSync = require("readline-sync");

let user = readlineSync.question('Enter a number:');

function rand10 (){
    return Math.floor(Math.random() * 10+1);
}

function multirand(n){
    let array=[];
    for(let i=0; i<n; i++){
        array[i] = rand10();
        // array[i]=random;
    }
    return array;
}

console.log(multirand(user));


// By reusing the function rand10() created in Exercise 2, 
// write a function named multiRand(n) that returns an 
// array of n numbers between 1 and 10. You should not 
// modify anything in rand10() to achieve this.