function getMax(array: number[]): number {
  let max: number = 0;

  array.map((num) => {
    if (max < num) {
      max = num;
    }
  });

  return max;
}

const array: number[] = [1, 23, 443, 543, 12, 654];

console.log(getMax(array));
