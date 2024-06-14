// Singeltons - made from constructor
// Object.create
// Object.literals
const mySymbol = Symbol("key1")
const users ={
    name:"Afreen",
    email:"afreenh606@gmail.com",
    location:"Jaipur",
    isloggedIn:false,
    lastLoggedIndays:["Monday", "Saturday"],
    [mySymbol]:"Mykey"
}

console.log(users["email"]);
console.log(users[mySymbol]);