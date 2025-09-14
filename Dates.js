//Date()
let TodayDate = new Date();                 //Created Date object
console.log(TodayDate.toString())           //Sun Sep 14 2025 16:33:34 GMT+0000 
console.log(TodayDate.toDateString())       //Sun Sep 14 2025
console.log(TodayDate.toLocaleString())     //9/14/2025, 4:34:50 PM

// To print a particular date 
let NewDate = new Date(2023,0,23);             //months range from [0,11] in JS. 
let NewDate2 = new Date(2003,6,22,18,30);      // With Time 6:30 
console.log(NewDate.toDateString());         //--Mon Jan 23 2023
console.log(NewDate2.toLocaleString());       //--7/22/2003, 6:30:00 PM

//Date.now() for latest time in milliseconds
//Date.getTime() for getting time in milliseconds  




