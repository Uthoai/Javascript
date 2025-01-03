const user = {
    name: "Uthoai",
    id: 5101054,
    greeting: function(){
        console.log(`${this.name} , welcome to website...`);
        console.log(this);
        
    }
}

// user.greeting()
// user.name = "Sam"
// user.greeting()

// console.log(this);


// function chai() {
//     console.log(this);
// }
// chai()



// Arrow Functon
// const chai1 = ()=> {
//     console.log("Arrow Function");
//     console.log(this);
    
// }
// chai1()


//implecite return
// const chai = ()=> console.log("Implecite Arrow Function");
// chai()


// if you add curly bress you need to add return, In arrow fuction if you add parentheses then don't 
// need to add return key word...


// for object return
// const obj1 = ()=> ({userName: "Uthoai"})
// console.log(obj1());
