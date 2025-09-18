try{
    console.log("Try block starts here");
    console.log(x);
    console.log("Try block ends here"); // This line wont run and would go into the catch block.
}
catch(e){
    // console.log("You reached the catch block. The error is here:",  e);
    //Throw custom error:
    throw new Error("Pehle decalre kar, fir karna print bhai.");
}