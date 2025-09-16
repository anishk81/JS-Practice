//General way of declaring / Explicit function
const sum1 = (num1, num2) =>{
    return num1 + num2;
}
console.log(sum1(23,25));

//Implicit function
const sum2 = (num1,num2) => (num1+num2);
console.log(sum2(25,25));
