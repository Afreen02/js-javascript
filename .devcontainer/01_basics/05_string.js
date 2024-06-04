const name = "Afreen"
const repoCount = 60

// console.log(name + repoCount + "Value");  ->   this is the wrong method

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const newgame = new String('Afreenh')
console.log(newgame[0]);
console.log(newgame._proto_);
console.log(newgame.length);
console.log(newgame.toUpperCase());
console.log(newgame.charAt(3));
console.log(newgame.indexOf('h'));

const newString = newgame.substring(0,5);
console.log(newString); 

const secondString = newgame.slice(-1,4);
console.log(secondString);