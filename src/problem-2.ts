{
  // Problem--> 2
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  const removeDuplicates = (numberArray: number[]): number[] => {
    const duplicates = numberArray.filter(
      (item, index) => numberArray.indexOf(item) === index
    );
    return duplicates;
  };

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  const join = `(${result.join(", ")})`;
  console.log(join);

  //
}
