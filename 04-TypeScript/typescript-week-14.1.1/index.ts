function greet(firstName: string): void {
  console.log(`Hello ${firstName}`);
}

greet("Narsi");

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(sum(1, 2));

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(24));

function callBackFunction(callback: () => void): void {
  setTimeout(() => {
    callback();
  }, 1000);
}

callBackFunction(() => {
  console.log("calling back");
});
