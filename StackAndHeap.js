// Heap in JS stores Non Primitive data types like Objects, Functions and Arrays. These are referenced 
// Stacks in JS stores Primitve data types like String, Number, Boolean, Undefined, Null, Symbol and BigInt. Here u get a copy.

//Stack --> Copy 
let username1 = "Ghanshyam";
let username2 = username1;
username2 = "Ramshyam";

console.log(username1);
console.log(username2);


//Heap --> Referenced
let UserOne = {
    email : "anish@google.com",
    upi: "ak@ptaxis"
}
let UserTwo = UserOne;

UserTwo.upi = "non@ybl";

console.log(UserOne);
console.log(UserTwo);

