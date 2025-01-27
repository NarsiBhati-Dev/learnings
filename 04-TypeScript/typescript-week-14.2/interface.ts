interface People {
  name: string;
  age: number;
  greet: () => string;
}

let people1: People = {
  name: "Narsi",
  age: 24,
  greet: () => {
    return "Hello Narsi";
  },
};

console.log(people1);

console.log(people1.greet());
