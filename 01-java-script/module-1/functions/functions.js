//   Practice Problems

/*
    Problem: 1 
    Write a function that takes two numbers
    and return their sum
 */

(function sum(number1, number2) {
  console.log(number1 + number2);
})(12, 23);

/*
    problem 2: 
    write a function that accept an array and a function as argument, and applies hte function to each element in the array 
*/

let array = [1, 2, 3, 4, 5, 6];

function arrayManipulate(array, callback) {
  return callback(array);
}

function callback(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
}

console.log(arrayManipulate(array, callback));

/*

*/
