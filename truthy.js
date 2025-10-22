const userEmail = []

if(userEmail == false){
    console.log("dont get email")
}
else{
    console.log("got user email found")
}
/*
Falsy values
false, 0,-0,bigint 0n,"",null,undefined,NaN

Truthy values
"0",'false'," ",[], {}, function(){}
*/

// if(userEmail.length == 0){
//     console.log("Array is empty")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1)

// Terniary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("Less then 80") : console.log("More then 80")