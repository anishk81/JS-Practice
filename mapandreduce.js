const users = [
  { name: "Anish", age: 22 },
  { name: "Ram", age: 28 },
  { name: "Riya", age: 17 }
];

// 1. Filter adults
const adults = users.filter(user => user.age >= 18);

// 2. Extract their names
const names = adults.map(user => user.name);

// 3. Count total age
const totalAge = adults.reduce((acc, user) => acc + user.age, 0);

console.log(adults);   // [{name:"Anish", age:22}, {name:"Ram", age:28}]
console.log(names);    // ["Anish", "Ram"]
console.log(totalAge); // 50