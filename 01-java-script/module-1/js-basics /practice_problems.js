/*
    write a program to check if a number is positive, negative, or zero.
*/

function aboutNumber(number) {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "isZero";
  }
}

let number = 3;
console.log(aboutNumber(number));

number = -3;
console.log(aboutNumber(number));

number = 0;
console.log(aboutNumber(number));

/*
    Write a program to print numbers from 1 to 10 using for loop. 
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/* 
    Create a simple program that handles a division by zero error.
*/

try {
  let num = 10;
  let num2 = 0;

  console.log(num / num2);
} catch (error) {
  console.error("Error: ", error.message);
}
