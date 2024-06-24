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