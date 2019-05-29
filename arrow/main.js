"use strict";
/*
let add = function(a, b) {
  let sum = a + b;
  console.log(sum);
  return false;
};
add(10, 2);
*/
/*
let add = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return false;
};

add(10, 20);
*/

/*
let People = function(person, age) {
  this.person = person;
  this.age = age;
  this.info = function() {
    // logs People
    console.log("old object",this);

    setTimeout(function() {
      // here this!=People
      console.log(this.person + " is " + this.age + " years old");
    }, 3000);
  };
};
let person1 = new People("Jon", 24);
person1.info();
*/

let People = function(person, age) {
  this.person = person;
  this.age = age;
  this.info = function() {
    // logs People
    console.log(this);

    setTimeout(() => {
      // arrow function to make lexical "this" binding
      // here this=People."this" has been inherited
      console.log(this.person + " is " + this.age + " years old");
    }, 3000);
  };
};
let person1 = new People("Jon", 21);

// logs : John is 21 years old after 3 seconds
person1.info();
