/*  JavaScript has several data types, 
which are categorized into primitive types and non-primitive types  */

// Primitive Tyoe Data
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3    // In Javascript number is number, there is no double or float.
const outsideTemp = null    // Null means empty not 0.
let userEmail;              // Undefined.

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);   //false
console.log(id === anotherId);  //false
//Symbol is a unique and immutable value often used as object property keys.

const bigNumber = 123456789012345678901234567890n;


// Reference Tyoe Data (Non-Primitive)
// Array, Objects, Functions.

const movieHeros = ["Super-Man", "Spider-Man", "Iron-Man"]

let myobj = {
    name: "Uthoai Marma",
    age: 26
}

const myFuncton = function () {
    console.log("Hello World");
}  
//In Javascript you can defined function in variable.


//JavaScript variables are dynamically typed.
let myId = 5101054
myId = "5101054"
myId = true



//++++++++++++++++++++++++++++++++++++++++

// Memory
// Stack (primitive), Heap (non-primitive)

// use stack
let myGmail_ID = "uthoaimarma597@gmail.com"

let myNew_Gmail_ID = myGmail_ID
myNew_Gmail_ID = "uthoaicodedevs@gmail.com"
console.log(myGmail_ID);
console.log(myNew_Gmail_ID);


// use heap
let userOne = {
    phone: "01828730300"
}

let userTwo = userOne
userTwo.phone = "01300040509"

console.log(userOne.phone);
console.log(userTwo.phone);





