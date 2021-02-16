function uniteUnique(...arr) {
  let finalArr = [];
  arr.forEach(el => {
    finalArr.push(...el);
  })
  return Array.from(new Set(finalArr));
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);