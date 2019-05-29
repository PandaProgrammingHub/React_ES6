"use strict"

let name = 'Jon snow';

function makeUppercase(word){
  return word.toUpperCase();
}

let template =
`<h1>${makeUppercase('Hello')}, ${name}</h1>
<p>This is a simple template in JavaScript</p>`;

// let template ='<h1>'+ makeUppercase('Hello')+ name+'</h1>'+'<p>This is a simple template in JavaScript</p>';

document.getElementById('container').innerHTML = template;