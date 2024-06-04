// 1.Primitive Datatype - 
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt.

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');


console.log(id === anotherId);

// 2.Reference Datatype(Non-Primitive) - 
// Array, Objects, Functions
// Non-primitive type always return object

const heroes = ["captain america", "avengers", "superman"]

let myObj = {
    name:"Afreen",
    age:22,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof myObj);

// #STACK(Primitive), HEAP(Non-Primitive) :-

let gitcode = "Afreen"
let anothername = gitcode
anothername = "coding"
console.log(gitcode);
console.log(anothername);

let userOne = {
    email:"afreen123@gmail.com",
    upi:"user@120"
}
let userTwo = userOne
userTwo.email = "hussain123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);