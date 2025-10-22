var c = 300;
let a = 100;
if (true) {
  let a = 10;
  const b = 20;
  //console.log("INNER : ", a);
}
// for (let i = 0; i < Array.length; i++) {
//   const elements = array[i];
// }

// console.log(`a: ${a}, b: ${b}, c: ${c}`);
// console.log(c);
// console.log(a);

function one() {
  const username = "hitesh";

  function two() {
    //const website = "learncodeonline.in";
    //console.log(username);
  }
  // console.log(website);
  two();
}  

// one()

if(true){
  const username = "hitesh";
  if(username === "hitesh"){
    //const website = " learncodeonline.in";
    //console.log(username+ website);
  }
  // console.log(website);
}
// console.log(username);

// ----------------------------- interesting -----------------------------

console.log (addone(4));
function addone(num){
  return num + 1;
}


const addtwo = function(num){
  return num + 2;
}

addtwo(4);
