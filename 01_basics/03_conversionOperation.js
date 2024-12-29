let score = "33"
console.log(typeof score);


// convert sting to number
let valueInNumber = Number(score)
console.log(typeof valueInNumber);


score = "33abc"
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

if (isNaN(valueInNumber)) {
    console.log("wrong number");
}else {
    console.log("This is Number " + valueInNumber);
}
// conversion other type to number
// "33" => 33
// "33abc" => NaN
// true => 1 / false = 0
// null => 0


// conversion number to boolean
let isLogin = "login done"
let numberLogin = Boolean(isLogin)

console.log(numberLogin);
// 1=> true; 0=> false
// "string"=> true; ""=> false


// number to string
let number = 33
let numberToString = String(number);

console.log(numberToString);

