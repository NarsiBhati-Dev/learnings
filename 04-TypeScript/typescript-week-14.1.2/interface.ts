interface UserInterFace {
  firstName: string;
  lastName: string;
  age: number;
}

function greet(user: UserInterFace) {}

let user: UserInterFace = {
  firstName: "Narsi",
  lastName: "Bhati",
  age: 24,
};

greet(user);
