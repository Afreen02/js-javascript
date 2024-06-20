function myName(){
    console.log("A");
    console.log("F");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("N");
}
myName();

function addNumbers(number1, number2){
    let result = number1 + number2
    // console.log("Afreen");   //it will work only before return 
    return result
}
const result = addNumbers(6,2)
console.log("Result" , result);

function loginUser(username){
    if(username === undefined){     // OR we can write (!username)
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUser());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 1000));

const user = {
    username: "Afreen",
    price:500
}
function handleobject(anyuser){
    console.log(`Username is ${anyuser.username} and price is ${anyuser.price}`);
}
handleobject(user)

const newArray = [100, 150, 250, 300]
function secondValue(getArray){
    return getArray[1]
}
console.log(secondValue(newArray));
