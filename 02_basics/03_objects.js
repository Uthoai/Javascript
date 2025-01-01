// when create an object through construction that object is singleton.
// Object.create

// object literals

const mySym = Symbol("Key1")

const user = {
    name: "Uthoai Marma",
    "id": "5101054",
    [mySym]: "myKey1",      // declear symbol in object
    age: 26,
    location: "Dhaka",
    email: "uthoaimarma597@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "tuesday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["id"]);

// console.log(user[mySym]);

// user.email = "uthoaicodedevs@gmail.com"
// Object.freeze(user)             // freeze avoid to changing object data.
// user.email = "uthoai@gmail.com"
// console.log(user["email"]);     //"uthoaicodedevs@gmail.com"

// console.log(user);

user.greeting = function () {
    console.log("Hello Js User");
}

user.greetingTwo = function () {
    console.log(`Hello Js User ${this.name}`);
}

console.log(user.greetingTwo());

