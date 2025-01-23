//  problem 1 - filter students by grade

function filterStudent(students) {
  const topStudent = students.filter((student) => student.grade === "A");
  const secondStudent = students.filter((student) => student.grade === "B");
  const failStudent = students.filter((student) => student.grade === "C");
  return { topStudent, secondStudent, failStudent };
}

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
];

console.log(filterStudent(students));

// problem 2 : destructure personal information

const person = { firstName: "John", age: 28, city: "New York" };

const { firstName, age, city } = person;
console.log(`Name: ${firstName} | Age : ${age} | City ${city}`);

//  problem 3 : use map to create a new Array
const numbers = [1, 2, 3];

const newArray = numbers.map((number) => number * 2);
console.log(newArray);
