// *Arrays*
const myArray = [1,2,3,4,5]
console.log(myArray[0]);
const myArray2 = new Array(1,2,3,4,5)
console.log(myArray2[3]);

// *Array Methods*

myArray.push(4)
myArray.pop(3)
console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(2));

const newArray = myArray.join()
console.log(myArray);
console.log(newArray);

// *Slice and splice(manipulate original array)* - 

console.log("A", myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);

console.log("B", myArray);
const myn2 = myArray.splice(1,3)
console.log(myn2);