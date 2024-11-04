const accountId=101;
let accountEmail="ranjitdakshvanshi@gmail.com";
var accountPass="1010"; //block and functional scope variable
accountCity="Mumbai";  //
console.table([accountId,accountEmail,accountPass,accountCity]);
// I will try to some changes in variable

 //accountId=102; accountId variable is const variable that's why it is not allow to change
// console.log(accountId);
console.log("We will try changing other variables");
accountEmail="ranjeet@gmail.com";
accountPass="ranjit1010";
accountCity="Navi Mumbai";
console.table([accountId,accountEmail,accountPass,accountCity]);

