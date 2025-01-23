const fruits = ["apple", "banana", "cherry"];
for (let fruit in fruits) {
  console.log(fruits[fruit]);
}

const person1 = {
  name: "narsi-1",
  age: 24,
};

const person2 = {
  name: "narsi-2",
  age: 24,
};
const person3 = {
  name: "narsi-3",
  age: 24,
};

const humans = [person1, person2, person3];

for (let key in humans) {
  console.log(`${key} : ${humans[key].name} `);
}

const person = new Map([
  ["name", "Narsi"],
  ["age", 24],
]);

for (let [key, value] of person) {
  console.log(`${key} : ${value}`);
}
