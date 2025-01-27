interface User {
  name: string;
  age: number;
}

function sumOfAge(user1: User, user2: User): number {
  return user1.age + user2.age;
}

const person1: User = {
  name: "Narsi",
  age: 24,
};

const person2: User = {
  name: "Me",
  age: 22,
};

console.log(sumOfAge(person1, person2));
