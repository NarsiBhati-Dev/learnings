/*
   Problem 1 : 
   write a program to print your name , age and favorite color 
   using variables
*/

function info() {
  let info = {
    fullName: "narsi bhati",
    age: 24,
    color: "black",
  };
  return info;
}

let information = info();

console.log(
  `Name: ${information.fullName}, Age: ${information.age}, Color: ${information.color}`
);
