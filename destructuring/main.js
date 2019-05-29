"use strict";
/*
// Imagine if we want extract a data from an array. Previously, how will this be done?
var introduction = ["Hello", "I", "am", "Jon"];
var greeting = introduction[0];
var name = introduction[3];

console.log(greeting); //"Hello"
console.log(name); //"Jon"
*/
/*
//If we want to extract data using arrays, it's quite simple using destructuring assignment

var introduction = ["Hello", "demo","Harry Potter"];
var [greeting, name] = introduction;

console.log(greeting); //"Hello"
console.log(name); //"I"
*/

/*
// Skipping Items in an Array

var [greeting, , , name] = ["Hello", "I", "am", "Night King"];

console.log(greeting); //"Hello"
console.log(name); //"Night King"
*/
/*
//Assigning the rest of an array

var [greeting,...intro] = ["Hello", "I" , "am", "Chandler Bing"];

console.log(greeting);//"Hello"
console.log(intro);//["I", "am", "Chandler Bing"]

*/


//Destructuring objects:

const userDetails = {
  userName: "Jon",
  emailId: "jon@gmail.com",
  mobile: "123456789",
  address:{
    city:"mumbai",
    pincode:"12345"
  }
};
const { userName, emailId, mobile, address} = userDetails;
const {city, pincode1} = address;

console.log(userName);
console.log(emailId);
console.log(mobile);


console.log(city);
console.log(pincode);
