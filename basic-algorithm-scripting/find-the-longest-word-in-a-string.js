function findLongestWordLength(str) {
  const longestWord = str.split(' ').reduce((acc = '', curr) => {
    return curr.length > acc.length ? curr : acc;
  });
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");