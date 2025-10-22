const name = "parth"
const repoCount = 50

// console.log(name +repoCount+ "value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("cricket")

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName)
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));

const newString =  gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-4, 4)
console.log(anotherString)

const newStringOne = " Hrishikesh "
console.log(newStringOne) // length of the string
console.log(newStringOne.trim()) // removes whitespace from both ends

const url = "http://parth.com/Parth%20Shrivastava"
console.log(url.replace('%20', '-'))
console.log(url.includes('Parth'))

