// const isLoggedin = true
// const temperature = 43 

// if(temperature === 43){
//     console.log("less then 50");
// }
// else{
//     console.log("temperature is greater then 50")
// }
// console.log("Execute");

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

const balance = 1000;
if(balance < 500){
    console.log("less then 500");
}
else if(balance < 750){
    console.log("less then 750");
}
else if(balance < 900){
    console.log("less then 750");
}
else{
    console.log("less then 1200");
}

const userLoggedin = true
const debitCard = true
const loggedinGoogle = false
const loggedinEmail = true

if(userLoggedin && debitCard && 2==3){
    console.log("Allow to buy course");
}
if(loggedinGoogle || loggedinEmail){
    console.log("User is logged in");
}
// ** this "||" for multiple condition **