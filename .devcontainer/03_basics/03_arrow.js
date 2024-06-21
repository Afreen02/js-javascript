const user ={
    username: "Afreen",
    price: 999,
    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sid"
// user.welcomeMessage()
// console.log(this);


// function code(){
//     console.log(this);
// }
// code()

// **Arrow Function** //

//  const friends = () =>{
//     let username = "Afreen"
//     console.log(this.username);
//  }
//  friends()

// **Basic arrow function
const addTwo = (num1, num2)=>{
    return num1 + num2
}
console.log(addTwo(5,8));

// **Implicit Method** //
