// function sayMyName(){
//     console.log("Uthoai Marma");
// }

// sayMyName()


// function addition(num1, num2) {
//     const result = num1 + num2
//     console.log(result);
// }
// addition(2, null)



// function addition(num1, num2) {
//     const result = num1 + num2
//     return result;
// }
// let result = addition(2, 5)
// console.log(result);


// function userLoggedIn(userName) {
//     return `${userName} just logged in...`
// }
// console.log(userLoggedIn("Rifat"));     //Rifat just logged in...
// console.log(userLoggedIn());        //undefined just logged in...



// function userLoggedIn(userName) {       //userName = "Sam"  default can set
//     if (userName !== null && typeof userName === "string" && userName.length >= 3) {
//         return `${userName} just logged in...`
//     }else{
//         return `please enter user name`
//     }
// }
// console.log(userLoggedIn("Uthoai"));



// function calculateCartPrice(...num){        // '...' this is rest operator
//     return num
// }
// console.log(calculateCartPrice(200,300,400,500,600));       //[ 200, 300, 400 ]


// function calculateCartPrice(val1, val2, ...num){        // '...' this is rest operator
//     return num
// }
// console.log(calculateCartPrice(200,300,400,500,600));       //[ 400, 500, 600 ]


const user = {
    user: "Uthoai",
    id: 5101054
}

function printUserData(anyObject){
    console.log(`User Name: ${anyObject.user} \nID: ${anyObject.id}`);
}
printUserData(user)