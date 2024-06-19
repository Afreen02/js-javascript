const gituser = new Object();

gituser.id = "123";
gituser.name = "Sid";
gituser.isLoggedIn = false;

// console.log(gituser);

const regularUser = {
    email:"afreen123@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Afreen",
            lastname:"Hussain"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = Object.assign({}, obj1, obj2)
// OR LATEST METHOD
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// When data is coming from database

const users = [
    {
        id: 1,
        email:"hussain@123gmail.com"
    },
    {
        id: 2,
        email:"hussain@3gmail.com"
    },
    {
        id: 3,
        email:"hussain@5678gmail.com"
    }
]
users[1].email
// console.log(Object.keys(gituser));
// console.log(Object.values(gituser));
// console.log(Object.entries(gituser));
// console.log(gituser.hasOwnProperty('isLoggedIn'));


// *Object Destructuring* //

const course ={
    coursename:"javascript",
    price:"999",
    student:"Afreen Hussain"
}
const {student:girl} = course
console.log(girl);

// *API Concepts example*

// {
//     "name" : "Afreen",
//     "id":"1"
// }

[
    {},
    {},
    {}
]