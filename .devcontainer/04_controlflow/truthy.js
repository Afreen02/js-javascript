const userEmail = []
if (userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have userEmail");
}

// FALSY Values - 
//false, 0, -0, BigInt, "", null, undefined, NaN

// TRUTHY Values - 
// "0" - Zero in string,
// "false", " ", [], {} - empty array and object ,
// function(){} 

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// NULLISH COALESCING Operator (??): null undefined
// for null and undefined it takes 2nd value.
let val1;
// val1 = 5 ?? 10
val1 = null ?? 20
console.log(val1);

// Ternary operator
// condition ? true : false 
const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")