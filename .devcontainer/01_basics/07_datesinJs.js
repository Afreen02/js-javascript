// DATES

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let mycreatedDate = new Date(2024, 0, 5);
console.log(mycreatedDate.toDateString());

let myCreatedDate = new Date("06-05-2024")
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate)
console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday:'long'
})
