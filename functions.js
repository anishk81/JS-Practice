// function AddTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
/*
const result = AddTwoNumbers(18,3);
console.log(result);                   //Undefined
*/

// let result = AddTwoNumbers(100,150);
// console.log(result);

const forUserMessage = function userMessage(username = "user101"){          //username = "user101" --> returns default value if nothing is passed.
    if(username === undefined){                                             //same as (!username)
        return "Please enter an username";
    }
    else{
        return `${username} has logged in successfully.`;
    }
};
console.log(forUserMessage("Riya"))