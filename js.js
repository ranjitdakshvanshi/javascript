//Given a string , reverse each word in the sentence
//ex...
// let snt="welcome to revers program";
// let rv=snt.split(" ").map(function(val){
//     return val.split("").reverse().join("");
// })
// console.log(rv.join(" "))


//How to check if an object is an array or not?
//ex...

// function checkArray(pasarr){
//     return Array.isArray(pasarr);
// }

// console.log(checkArray([]));
// console.log(checkArray({}));

// how to empty an array in javascript
// exa
// let arr=[1,2,3,4,5]
// arr.length=0;
// console.log(arr);


//how would you check if a number is an integer ? note don't use integer function

// let n=1001.2
// // console.log(Number.isInteger(n))
// if(n%1===0){
//     console.log("true");
// }else{
//     console.log("False");
// }

//make this work: duplicate([1,2,3,4,5]); [1,2,3,4,5,1,2,3,4,5]
//  let a =[1,2,3,4,5]
//  console.log(a.concat(a));

// white a javascript function to reverse the number
// function rev(n){
//  console.log( Number(n.toString().split("").reverse().join("")))
// }
// rev(10);
  
//  function rev(n){
//     let st=0;
//     while(n>0){
//         let nn=n%10;
//      st=st*10+nn;
//      n=Math.floor(n/10);
//     }
//     console.log(st)
//  }rev(1321);

//write a function  that checks where a passed string is palindrome or not

// function pali(str){
//     let newstr=str.split("").reverse().join("");
//     //return  str===newstr;
//     // if(str===newstr){
//     //     console.log("TRUE");
        
//     // }else{
//     //     console.log("FALSE")
//     // }

// }
// pali("poop")
// pali("loop")
// function staph(saf){
//     return saf.split("").sort().join("");
// }
// console.log(staph("ranjeet"))