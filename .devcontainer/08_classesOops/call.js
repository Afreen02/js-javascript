function SetUsername(username){
    this.username = username     //complex DB calls
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "afreen12@gmail.com", "123")
console.log(chai);