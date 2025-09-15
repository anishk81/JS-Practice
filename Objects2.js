const user1 = {
    1 :"A",
    2 : "B"
};

const user2 = {
    3 : "C",
    4 : "D"
}

const user3 = {
    5 : "E",
    6 : "D"
}

/*
const compliedUsers = {...user1, ...user3}; // Spread the object and then combine them.

console.log(compliedUsers);
*/

const UserDatabase = {
    id: "ak47",
    Name: "Anish Kothari",
    grantedAccess : false
}

//Very Important
//console.log(Object.keys(UserDatabase));                    //[ 'id', 'Name', 'grantedAccess' ]
//console.log(Object.values(UserDatabase));                 //[ 'ak47', 'Anish Kothari', false ]
//console.log(Object.entries(UserDatabase));                // Gives key and value pairs in nested array
//console.log(UserDatabase.hasOwnProperty("ak47"));           // To check if there is present in that key or no. [No values]


//Rename keys/names present in the object --> Destructuring in JS
const {grantedAccess : access} = UserDatabase;
console.log(access);            //granted access is renamed to access and hence can be called now 


//Example in react while passing props using destructuring
const navbar = ({company}) => {
}
navbar(company = "Google");


