//user.welcomeMessage();  --> can never call a function before it has been initialized.

const user = {
    username : "Raul",
    age: 22,
    welcomeMessage:function(){                                                         // function inside of an object.
        console.log(`Wecome ${this.username}, you can now use the website.`);         //Need to mention "this." to access keys within an object inside a function. In just function cannot use "this."
    }
}


//user.username = "Sam";                      //this changes the value inside the object.
//user.welcomeMessage();                      //calling the function to return/print whats inside the function



function weekdays(){
    dayOne = "Sunday";      //If we dont decalre it considers it as var / const in normal function.
    console.log(this.dayOne);
}

weekdays();


const weekend = () => {
    let dayTwo = "Saturday";
    console.log(dayTwo);
}
weekend();

const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
greet('anish');