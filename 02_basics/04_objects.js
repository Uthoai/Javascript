// Singleton

const tinderUser = new Object()
tinderUser.id = "101001"
tinderUser.name = "Sammy"
tinderUser.email = "sammy@gmail.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    userDetail: {
        userFullName: "Sammy",
        userId: "5450"
    }
}

// console.log(regularUser.userDetail.userFullName);


//marge or combains objects
const object1 = { 1: "a", 2: "b"}
const object2 = { 3: "c", 4: "d"}

const newObj = Object.assign({}, object1,object2)       // traget, source
// console.log(newObj);

const newObj2 = {...object1, ...object2}
// console.log(newObj2);




//+++++++++++++++++++++

const usersList = [
    {
        id: 1,
        email: "example1@gmail.com"
    },
    {
        id: 2,
        email: "example2@gmail.com"
    },
    {
        id: 3,
        email: "example3@gmail.com"
    },
]
// console.log(usersList[0].email);



// keys, values, entries
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));       // get objects keys
// console.log(Object.values(tinderUser));       // get objects value
// console.log(Object.entries(tinderUser));       // get objects keys & value pair with array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));       //check key aviable in object



const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// const {courseInstructor} = course
const {courseInstructor: instructor} = course
console.log(instructor);


