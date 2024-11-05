// // Execution context and lexical enviroment...
// Execution is container where the function code is executed, they are contain three thinks variable, function, lexical enviroment.
// Lexical Enviroment is scope and scopechain or rules


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// HOW TO COPY VALUE FROM REFERENCE..............
// let ar=[1,2,3,4,5];
//   let arr=ar;
//   arr.pop();
//   console.log(ar);
//   console.log(arr);
// // Copy atual value of array by using spread Operator (...xyz) 
//   let ar=[1,2,3,4,5];
//   let arr=[... ar];
//   arr.pop();
//   console.log(ar);
//   console.log(arr);

//   now we will apply on object what's happend see below   
// let ob={name:"Demo"};
// let obb=ob;
// obb.name="Demo1";
// console.log(ob.name);
// console.log(obb.name);
// now used spread operator
// let ob={name:"Demo"};
// let obb={... ob};
// obb.name="Demo1";
// console.log(ob.name);
// console.log(obb.name);.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// truthy and falsy
// falsy value = 0, undefined,null,NaN,document.all other truthy
// example. 
//  if(NaN){
//     console.log("Truthy");
//  }
//  else {
//     console.log("Falsy");
//  }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
