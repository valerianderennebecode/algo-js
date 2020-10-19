/*
let min = 1000 ;
let array = [11, 16, 19, 6, 90];

for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }

}

console.log(min);
*/
/*
let array = [11, 16, 19, 6, 90];
let i=0;
let min = array[i];


for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
console.log(array.indexOf(min));

// 
let array = [11, 16, 19, 6, 90];
let min = array[i];
let i=0;

for (i=0; i < array.lenght; i++) {
    if (array[i] < min) {
        min = array[i];
    }
} */

let array = [11, 16, 19, 12, 90];


for (let i = 0; array.lenght > i; i++) {
    
    for (let j = 1; array.lenght > j ; j++); {
        if (array[i] > array[j]) {
            console.log("False") ;
        }
    }
}
console.log("True");