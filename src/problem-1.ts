{
  // Problem-1
  // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  //   const sumArray = [1, 2, 3, 4, 5];
  type numbersArray = number[];
  const sumOfNumber = (sumArray: numbersArray) => {
    const sum = sumArray.reduce((cur, pre) => cur + pre, 0);
    return sum;
  };
  const result = sumOfNumber([1, 2, 3, 4,5]);
  console.log(result);

  //
}
