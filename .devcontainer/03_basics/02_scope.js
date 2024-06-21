let a = 200
if(true){
    let a = 10
    const b = 50
    console.log("INNER:", a);
}
for(let i = 0; i < Array.length; i++){
    const element = Array[i];
}
console.log(a);


function one(){
    const user = "Afreen"
    function two(){
        const website = "Instagram"
        console.log(user)
    }
    two()
}
one()




if(true){
    const username = "Afreen"
    if(username === "Afreen"){
        const website = "youtube"
        console.log(username  +  website);
    }
}

// ****IMPORTANT****

function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)