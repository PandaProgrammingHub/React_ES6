"use strict"

function testVar(){
  var a = 30;
  if(true){
    var a = 50; 
    console.log(a); // 50
  }
  console.log(a); // 50
}

function testLet(){
  let a = 30; // 30
  if(true){
    let a = 50; //50
    console.log(a); // 50
  }
  console.log(a); // 30
}
// testVar();
// testLet();
const hero = "Jon Snow";

// hero = 'Night King';

console.log(hero);
