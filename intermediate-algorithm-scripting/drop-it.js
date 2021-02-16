function dropElements(arr, func) {
  let passedIndex = arr.findIndex(func);
  return passedIndex >= 0 ? arr.slice(passedIndex) : [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([0, 1, 0, 1], function(n) {return n === 1;})