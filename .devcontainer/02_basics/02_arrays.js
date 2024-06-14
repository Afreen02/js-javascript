const marvel_heroes = ["Ironman", "Captain America", "Thor"]
const dc_heroes = ["Superman", "Batman", "Wonder Woman"]
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

const all_array_heroes = [...marvel_heroes, ...dc_heroes] 
// *spread operator spread whole operation*
console.log(all_array_heroes);

const another_array = [1,2,3,4,[5,6,7],9,10,[13,15]]
const another_array2 = another_array.flat(1)
console.log(another_array2);

console.log(Array.from("Afreen"));
console.log(Array.from({name:"Afreen"}));
