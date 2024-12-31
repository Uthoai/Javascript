//+++++++++++++++++++++++ Data ++++++++++++++++++++++
const today_date = new Date();
// console.log(today_date);                        //2024-12-31T05:25:35.039Z
// console.log(today_date.toString());             //Tue Dec 31 2024 05:27:22 GMT+0000 (Coordinated Universal Time)
// console.log(today_date.toDateString());         //Tue Dec 31 2024 
// console.log(today_date.toISOString());          //2024-12-31T05:31:52.279Z
// console.log(today_date.toJSON());               //2024-12-31T05:31:52.279Z 
// console.log(today_date.toLocaleDateString());   //12/31/2024
// console.log(today_date.toLocaleString());       //12/31/2024, 5:31:52 AM

// console.log(typeof today_date);                 //object


let myCreatedDate = new Date(2023, 11, 5);
// console.log(myCreatedDate.toDateString());         //Tue Dec 05 2023

// myCreatedDate = new Date(2025, 11, 5, 16, 30, 15);
// console.log(myCreatedDate.toLocaleString());       //12/5/2025, 4:30:15 PM

// myCreatedDate = new Date("2025-11-05");
// console.log(myCreatedDate.toLocaleDateString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);    //millisecond
// console.log(myCreatedDate.getTime());

// console.log(Math.floor((Date.now())/1000));     //second

const newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());      //day start to monday
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1);    //0-11 or add 1
// console.log(newDate.getTime());

console.log(newDate.toLocaleString('default',{
    // weekday: "short"        // Tue
    // weekday: "long"         //Tuesday
}));

