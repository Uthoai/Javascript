const marvel_heros = ["Iron Man", "Thor", "Captain America"]
const dc_heros = ["Super Man", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); 
/*[
    'Iron Man',
    'Thor',
    'Captain America',
    [ 'Super Man', 'Flash', 'Batman' ]
]*/
// console.log(marvel_heros[3][1]);        //Flash

const myHeros = marvel_heros.concat(dc_heros)
// console.log(myHeros);
/*[
    'Iron Man',
    'Thor',
    'Captain America',
    'Super Man',
    'Flash',
    'Batman'
]*/


const all_new_heros = [...marvel_heros, ...dc_heros]        //sprade 
// console.log(all_new_heros);
// concat and sprade both are marge one array to another


// FLAT
const anotherArr = [1, 2, [3, 4, 5], 6, 7, [8, [9, 10]], 11]
// console.log(anotherArr[2][2]);      // 5
// console.log(anotherArr[5][1][0]);       // 9

const realAnotherArr = anotherArr.flat(Infinity)        // add number or set infinity and get all value in sigle array 
// console.log(realAnotherArr);


// isArray, from
// console.log(Array.isArray("JAVASCRIPT"));      // false. check input value is array or not
// console.log(Array.from("JAVASCRIPT"));      // convert string to array

// console.log(Array.from({name: "Uthoai"}));      // []


// number variable to array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));        //[ 100, 200, 300 ]
