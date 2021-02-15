function frankenSplice(arr1, arr2, n) {
  let arr2Cpy = [...arr2];
  arr2Cpy.splice(n, 0, ...arr1);
  return arr2Cpy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);