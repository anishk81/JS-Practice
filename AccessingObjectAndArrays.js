//Accessing Array of Objects
const data1 = [
    {name: "Ram" , age: 18},
    {name:"Shyam", age : 24}
]

console.log(data1[0]);          //{ name: 'Ram', age: 18 }
console.log(data1[0].name);     // Ram

// Accessing Objects with Objects inside
const data2 = {
    user1 : {name: "Riya", age : 22 },
    user2 : {name: "Shyam", age : 24}
}

console.log(data2.user1.name);
console.log(data2["user2"].age);

//{[]},{{}}] → Nested mix of arrays & objects

const data = {
  users: [
    { id: 1, name: "Anish" },
    { id: 2, name: "Ram" }
  ],
  meta: {
    total: 2,
    status: "success"
  }
};

// console.log(data.meta.total); //To access the object inside the object
// console.log(data.users[1]);  //To access the array inside the object


