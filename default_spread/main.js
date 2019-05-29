"use strict"

// function multiply(a, b=1) {
//   return a * b; 
// }

// console.log(multiply(5, 2)); // expected output: 10

// console.log(multiply(5)); // expected output: 5

// //Rest parameter
// let displayTags = function (postId, ...tags) {
//   console.log(postId); // 25
//   console.log(tags); // ['javascript', 'React Js', 'Node Js','MongoDb']
// };
// displayTags(25, 'javascript', 'React Js', 'Node Js','MongoDb');


//spread operator
let intialUser = {
    name:"abc",
    age:"26",
    emailId:"abc@gmail.com",
    phone:"123456456",
}

let updateUser = function(user = intialUser){
  //name, age
  return {
    ...user,
    name:"nxp",
    age:30
  }
}
console.log(updateUser());

