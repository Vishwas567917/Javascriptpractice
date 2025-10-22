const marvel_heros = ["thor", "ironman", "hulk", "captain_america", "black_widow", "hawkeye"];
const dc_heros = ["superman", "batman", "wonder"]


// marvel_heros.push(dc_heros)


// console.log(marvel_heros);
// console.log(marvel_heros[3]); // Output: captain_america

// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);

const allheros = [...marvel_heros, ...dc_heros]
// console.log(allheros)

const another_array = [ 1, 2, 3, [4, 5, 6], 7, [8,[9, 10]] ];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("parth"))
console.log(Array.from("parth"))
console.log(Array.from({name: "parth", age: 20})) // interesting 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // interesting
console.log(Array.of(1, 2, 3, 4, 5)) // interesting
