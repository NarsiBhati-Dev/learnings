/* 
    Define a variable to check if person's age is between 18 - 64 or not
*/

function operator(age) {
  return age >= 18 && age <= 64;
}

if (operator(67)) {
  console.log("age is between 18 - 64");
} else {
  console.log("age is not between 18 - 64");
}
