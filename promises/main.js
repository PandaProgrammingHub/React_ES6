"use strict";
const url = "http://jsonplaceholder.typicode.com/users";
const getData = url=> {
  return new Promise(function(resolve, reject) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log(error);
        reject("Error:", error);
      });
  });
}
const fetchUser = () => {
  getData(url)
    .then(function(data) {  
      let todos = data;     
      let output = "";
      for (let todo of todos) {
        output += `
        <tr>
          <td>${todo.id}</td>
          <td>${todo.name}</td>
          <td>${todo.username}</td>
          <td>${todo.email}</td>
          <td>
          <b>street: </b>${todo.address.street},
          <b>suite: </b>${todo.address.suite},
          <b>city: </b>${todo.address.city},
          <b>zipcode: </b> ${todo.address.zipcode}.
          </td>
        </tr>
      `;
      }
  
      document.getElementById("container").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
  };
