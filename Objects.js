// Two ways to declare objects in JS: 
// 1)Singleton (if made using constructor) --> Object.create
// 2)Object Literals (Which we generally create) --> const user{}

//Define a symbol 
const uniqSym = Symbol("Key1");

const UserObjects = {
    Username : "Anish",
    "full name": "Anish Kothari",
    [uniqSym] : "myKey",
    age : 18,
    gender  : "male"
}

/*
console.log(UserObjects.Username); //Normaal accessing 
console.log(UserObjects["full name"]); // To access if decalred string 
console.log(UserObjects[uniqSym]); // To print a symbol

Object.freeze(UserObjects); //Freezes the object and does not allow any change later within the object.

console.log(UserObjects);
*/

UserObjects.greetingOne = function(){
    console.log("Hello JS user");
}
UserObjects.greetingTwo = function(){
    console.log(`Hello JS user, ${this.Username} of age:${this.age} and gender ${this.gender}.\nWelcome aboard!`)
}

console.log(UserObjects.greetingOne());
console.log(UserObjects.greetingTwo());

