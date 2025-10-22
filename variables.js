const accountId = 144553
let accountEmail = 'parthshrivastava.com'
var accountPassword = '123456'
accountCity ='jaipur' 
let accountState;
//accountId = 2 // not allowed
  
accountEmail = 'hight.gmail.com'
accountPassword = '12345678'
accountCity = 'delhi'


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
  