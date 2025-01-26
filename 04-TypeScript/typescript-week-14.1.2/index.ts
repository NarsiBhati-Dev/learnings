type UserType = {
  name: string;
  age: number;
};

function greet(user: UserType): void {
  console.log(`your name : ${user.name}  , your age : ${user.age}`);
}

let user: UserType = { name: "narsi", age: 24 };

greet(user);
