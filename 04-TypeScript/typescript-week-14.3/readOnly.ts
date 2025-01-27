type User = {
  readonly name: string;
  readonly age: number;
};

const user: Readonly<User> = {
  name: "Narsi",
  age: 21,
};

console.log(user);
