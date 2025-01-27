interface User {
  firstName: string;
  lastName: string;
  age: number;
}

const users: User[] = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Smith", age: 9 },
  { firstName: "Alice", lastName: "Johnson", age: 22 },
  { firstName: "Bob", lastName: "Brown", age: 28 },
  { firstName: "Bob", lastName: "Brown", age: 8 },
  { firstName: "Bob", lastName: "Brown", age: 28 },
];

function isLegal(usersData: User[]): User[] {
  return usersData.filter((user) => user.age > 18);
}

console.log(isLegal(users));
