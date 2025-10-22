const user = {
    username: "John Doe",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}


// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this); 

// function chain(){
//     // let username = "Jane Doe";
//     console.log(this.username);
// }

// chain()

// const chai = function(){
//     let username = "Jane Doe";
//     console.log(this.username)
// }

const chai = () => {
    let username = "Jane Doe";
    console.log(this)
}



// chai()

// const addtwo= (num1, num2) => {
//     return num1 + num2;
// }
// const addtwo= (num1, num2) => num1 + num2 

// const addtwo= (num1, num2) => (num1 + num2)
const addtwo= (num1, num2) => ({username: "john"})



console.log(addtwo(2,3))

// const myarray = [1,2,3,4,5];

// myarray.forEach()