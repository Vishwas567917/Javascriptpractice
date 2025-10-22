function saymyname() {
  console.log("H");
  console.log("e");
  console.log("l");
  console.log("l");
  console.log("o");
}


// saymyname(); 

// function addTwoNumbers(a, b) {
//   console.log(a+b);
// }

function addTwoNumbers(a, b) {
  let result = a + b;
  return result;
}

const result = addTwoNumbers(5, 10);
// console.log("result : ",result); 


function loginuserMessage(username) {
  if ( username === undefined) {
    console.log("Please enter a valid username");
    // return "Please enter a valid username";
  }
  return `Welcome ${username}`;
} 
loginuserMessage("John Doe");
// console.log(loginuserMessage("John Doe"));
console.log(loginuserMessage());

