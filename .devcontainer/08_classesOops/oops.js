const user = {
    username: "Afreen",
    loginCount: 8,
    signIn: true,

    getuserDetails: function(){
        // console.log("Got user detail from database");
        console.log(`Username: ${this.username}`)
    }
}
console.log(user.username);
console.log(user.getuserDetails());