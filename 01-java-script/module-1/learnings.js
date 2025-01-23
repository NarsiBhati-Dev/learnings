/*
   Problem 1 : 
   write a program to print your name , age and favorite color 
   using variables
*/

const data = {
  name: "Narsi",
  age: 24,
  color: "Black",
};

console.log(`Name: ${data.name} , Age: ${data.age} , Color: ${data.color} `);

/*
    Problem 2 : 
    write a program to check if a number is positive, negative, or zero.
*/
const checkNumber = (number) => {
  let aboutNumber = "";
  if (number > 0) {
    aboutNumber = "Positive";
  } else if (number < 0) {
    aboutNumber = "Negative";
  } else {
    aboutNumber = "Zero";
  }
  return aboutNumber;
};

console.log(checkNumber(2));
console.log(checkNumber(-2));
console.log(checkNumber(0));

/*  Problem 3 : 
    Write a program to print numbers from 1 to 10 using for loop. 
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*  Problem 4 : 
    Create a simple program that handles a division by zero error.
*/

try {
  const division = 10 / 0;
  console.log(division);
} catch (error) {
  console.error(error);
}

/*  Problem 5 : 
    Define a variable to check if person's age is between 18 - 64 or not
*/

const ageCheck = 24;

if (ageCheck > 18 || ageCheck < 64) {
  console.log("age is between 18 - 64");
} else {
  console.log("age is  not between 18 - 64");
}

/*
    Problem: 6 
    Write a function that takes two numbers
    and return their sum
 */
const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(10, 23));

/*
    problem 7: 
    write a function that accept an array and a function as argument, and applies hte function to each element in the array 
*/

const changeArray = (array, callback) => {
  const newArray = array.map((number) => number * 2);
  return newArray;
};

console.log(changeArray([1, 2, 3, 4, 5, 5]));

//  problem 8 : use map to create a new Array

let array = [1, 2, 3, 4, 5, 6];
const newArray = array.map((value) => value * 5);

console.log(newArray);

//  problem 9 : filter students by grade
const students = [
  {
    name: "xyz",
    grade: "A",
  },
  {
    name: "xyz2",
    grade: "B",
  },
  {
    name: "xyz3",
    grade: "A",
  },
  {
    name: "xyz4",
    grade: "C",
  },
];

const topStudents = students.filter((student) => student.grade === "A");
const secondStudents = students.filter((student) => student.grade === "B");
const failStudents = students.filter((student) => student.grade === "C");

console.log(topStudents);
console.log(secondStudents);
console.log(failStudents);

// problem 10 : destructure personal information

const person = {
  name: "xyz",
  age: 24,
};

const { name, age } = person;
