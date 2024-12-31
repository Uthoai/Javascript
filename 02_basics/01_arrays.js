// +++++++++++++++++ Array +++++++++++++++

let myArr = [10, 30.25, 40, true, "Uthoai", null]
let myArr2 = new Array(12,23,24,53,62,85)
// console.log(myArr);
// console.log(myArr2[2]);


// Array Methods
const userId = new Array(501, 502, 503)
// userId.push(505)        // Add
// userId.push(511)        
// userId.pop()            //Delete last index value

// userId.unshift(500)     //[ 500, 501, 502, 503, 505 ]
// userId.shift()            //Delete first index value  [ 502, 503, 505 ]

// console.log(userId.includes(502));      // true
// console.log(userId.includes(509));      // false

// console.log(userId.indexOf(503));       // if value contain in array, output gives index number else -1

// console.log(userId);



// const newArr = userId.join()        // Add another array as string
// console.log(userId);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice
const arr1 = new Array(11,12,13,14,15)
console.log("A " + arr1);

const arr2 = arr1.slice(1, 3)       // get index 1-2 from other array
console.log(arr2);
console.log("B " + arr1);

const arr3 = arr1.splice(1, 3)      // get index 1-3 form array and those value remove from that array
console.log(arr3);
console.log("C " + arr1);



