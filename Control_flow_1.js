// if
// const Isuserloggedin = true;
// const temperature = 30;
// if (temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("after if statement");
// }
// >,<,>=,<=,==,===,!=,!==
// const score = 200

// if(score > 100){
//     const power ="fly"
//     console.log(`user power is ${power}`)
// }


const balance = 1000;

// if (balance > 500) console.log("test"),
//     console.log("balance is more than 500");

// if(balance < 500){
//     console.log("less then")
// }
// else if(balance < 750){
//     console.log("more than 750")
// }
// else if(balance < 900){
//     console.log("less than 750")
// }
// else{
//     console.log("less then 1200")
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}
if(userLoggedIn && debitcard){
    console.log("Allowed to buy course")
}
