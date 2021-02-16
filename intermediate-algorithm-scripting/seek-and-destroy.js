function destroyer(arr, ...args) {
  return arr.filter(el => args.indexOf(el) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);