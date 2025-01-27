// Generics

type InputType = number | string;

function firstEl(arr: InputType[]): InputType {
  return arr[0];
}

const value = firstEl(["Narsi", "Bhati"]); // can't use value.toUpperCase()
const value2 = firstEl([1, 2, 3, "Bhati"]); // it take both number and string which we don't want

function identity<T>(arg: T[]): T {
  return arg[0];
}

let output1 = identity<number>([1, 2, 3]);
let output2 = identity<string>(["Narsi", "Bhati"]);
console.log(output2.toUpperCase());
