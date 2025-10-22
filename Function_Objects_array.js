function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(100,200,400,2000)); // Output: 100

const user = {
    username: "JohnDoe",
    age: 30
};

function handlObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`)
}

// handlObject(user); // Output: Username is JohnDoe and age is 30\

handlObject({
    username: "JaneDoe",
    age: 25
})

const myNewArray = [1, 2, 3, 4, 5];
function handleArray(array){
    return array[1]
}

// console.log(handleArray(myNewArray)); // Output: 2
console.log(handleArray([2000,3000,4000])); // Output: 2
