const name = "Uthoai Marma"
let age = 26

//console.log(name + " age:" + age);
console.log(`My Name is ${name} and age is ${age}`);    //readable

const gameName = new String('Road Rush')
// console.log(gameName[4]);               //o
// console.log(gameName.__proto__);        //{}
// console.log(gameName.repeat(2));        //Road_RushRoad_Rush
// console.log(gameName.charAt(2));        //a
// console.log(gameName.indexOf('R'));     //0
// console.log(gameName.search('u'));      //6
// console.log(gameName.slice(2));         //ad_Rush
// console.log(gameName.slice(2,6));       //ad_R
// console.log(gameName.substring(1,4));   //oad
// console.log(gameName.split(' '));          //[ 'Road', 'Rush' ]

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);                //oad

const newString = "  Uthoai"
console.log(newString.trim());            //Uthoai

const url = "http://uthoai%20.com"
console.log(url.replace('%20','_'));      //http://uthoai_.com
console.log(url.includes('ai'));          //true


