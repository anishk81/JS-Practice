//FOR LOOP

// let greetings = "Hello World!";
// for (let greet of greetings){  //returns charecters in the word and instead of "of" if you write "in" it will return 1,2,3 
//     greet  = greet + "!" // with "let" its possible to make changes inside.
//     console.log(`Each char in greetings is ${greet}`);
// }

/*
const greetings = "Hello World!";
for (const greet of greetings){  //returns charecters in the word and instead of "of" if you write "in" it will return 1,2,3 
    greet  = greet + "!" // with "const" its not possible to make changes inside the loop.
    console.log(`Each char in greetings is ${greet}`);
}
*/

// Maps;

const map = new Map(); // decalere a new map. Map can only store unique values.
map.set("IN","+91"); //.set to add new values in the map.
map.set("AE", "+971");

/*
for(const key of map){
    console.log(key); // return in form of array the entire map
}
*/


for(const [key] of map){
    console.log(key); // to print key seperate and same for value or both without in array form.
}

// console.log(map); 

