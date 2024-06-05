const score = 500
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const rate = 1000000;
console.log(rate.toLocaleString('en-IN'));

const min = 10
const max = 20
console.log(Math.random(Math.random() *( max - min + 1)) + min);