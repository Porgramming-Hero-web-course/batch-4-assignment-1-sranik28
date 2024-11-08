{
  // Problem--> 3
  // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

  const countWordOccurrences = (sentence: string, word: string): number => {
    const wordRegExp = new RegExp(`\\b${word}\\b`, "gi");
    const Matching = sentence.match(wordRegExp);
    return Matching ? Matching.length : 0;
  };
  const result = countWordOccurrences(" I love typeScript!", "typescript");
  console.log(result);
}
