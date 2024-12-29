const accountId = 5101054;
let accountEmail = "uthoaimarma597@gmail.com";
var accountPassword = "1234";   
accountCity = "Chittagong";     //this is possible but don't create variable like this.

// accountId = 51010; //not allowed because this is const variable.

accountEmail = "uthoaicodedevs@gmail.com";
accountCity = "Dhaka";
let accountState;
/*
prefer not to use 'var'
because of issue in block scope and functional scope.
*/

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);

//accountState output is: undefined . Because there is no value.