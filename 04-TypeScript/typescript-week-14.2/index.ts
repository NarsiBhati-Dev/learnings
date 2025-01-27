interface User {
  name: string;
  age: number;
  address?: {
    city: string;
    country: string;
    pincode: number;
  };
}

let user1: User = {
  name: "Narsi",
  age: 24,
  address: {
    city: "Jd",
    country: "India",
    pincode: 234323,
  },
};

let user2 = {
  name: "Narsi",
  age: 25,
};

console.log(user1);

console.log(user2);
