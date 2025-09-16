function CalculateCartPrice(...values){                         //spread/rest operator
    //return values;                                            //returns the values in the form of an array
    //return values.reduce((sum,curr) => sum+curr , 0)            //Use .reduce() to add all numbers. It reduces the array to a single value.
}

//console.log(CalculateCartPrice(100,200,300,400,500));

const ItemList = {
    item : "Toothpate",
    price: "Rs.35"
}


function objectIdentifier(anyObject){
    console.log(`The item you selected is ${anyObject.item} and price is ${anyObject.price}`);
}
objectIdentifier(ItemList);

