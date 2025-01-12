const myObject = {
    name: "Uthoai",
    age: 26,
    phone: "01300040509",
    address: "Mirpur Dhaka",
    occupation: "Android Developer"
}
// for (const key in myObject) {
//     console.log(`${key} = ${myObject[key]}`);
// }



const codingLanguage = ["js","c++","c#","java","kotlin"]

// codingLanguage.forEach( function (item) {
//     console.log(item);
// } )

// codingLanguage.forEach( (item)=>{ 
//     console.log(item); 
// })


// function printMe(item){
//     console.log(item);
// }
// codingLanguage.forEach(printMe)


// codingLanguage.forEach( (item, key, array)=>{
//     console.log(item, key, array);
// })


const user = [
    {
        name: "Uthoai",
        id: 101
    },
    {
        name: "Pritom",
        id: 102
    },
    {
        name: "Joy",
        id: 103
    },
]

user.forEach( (item)=>{
    console.log(item.name);
})

