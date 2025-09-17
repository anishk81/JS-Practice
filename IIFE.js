//Immediately Invoked Function Expressions (IIFE) - it runs immediately after it has beeen assigned without the need to be called separately.
//Named IIFE
(function invoke(){
    console.log("DB is connected");
})();

//Unnamed IIFE
( () => {
    console.log("DB is connected to backend.")
}
)()