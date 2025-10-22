// # Primitive data types

// 7 primitive data types in JavaScript
// string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('id')
const anotherid = Symbol('id') 

console.log(id === anotherid) // false, symbols are unique;

// // bigint example
// const bigNumber = 1234567890123456789012345678901234567890n
// console.log(bigNumber);

// bigint is used for very large integers


// # Non-Primitive data types
// reference (non primitive) data types
// object, array, function, date, regex, etc.

const heros = ['Thor', 'Ironman', 'Hulk']
let myHero={
  name: 'Thor',
  age: 1000,
}


const myfunction= function(){
    console.log('Hello World');
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) vs heap memory(non-primitive)
let myYoutubename = "Codevolutiondotcom"


let anothername = myYoutubename
anothername = "Codevolutiondotcom Codevolutiondotcom"
console.log(myYoutubename) // Codevolutiondotcom Codevolutiondotcom
console.log(anothername) // Codevolutiondotcom Codevolutiondotcom

let userOne = {
  email : "user@google.com",
  upi : "user@bly"
}

let userTwo = userOne
userTwo.email = "parth@google.com"

console.log(userOne.email)
console.log(userTwo.email)
