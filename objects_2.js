// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jane",
            lastname: "Doe"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "one", 2: "two"}
const obj2 = {3: "uno", 4: "dos"}
const obj4 = {5: "five", 6: "six"}
// const obj3 = { obj1, obj2 }
const obj3 = {    ...obj1,...obj2,}
// const obj3 = Object.assign({},obj1, obj2, obj4)
// console.log(obj3)

const users ={ 
    id: 1,
    name: "John",
    email: "h@gmail.com"
}

// users.email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("id"));


const course = {
    coursename : "JavaScript",
    price: 100,
    courseInstructor: "John Doe"
}

// course.courseInstructor 

const {courseInstructor: instructor} = course
console.log(instructor);

// const navbar = ({company}) => {
// }

// navbar(company = "Google") 


// {
//     name: "John",
//     age: 30,
//     course: "JavaScript",
//     price: 100,
    
// }

