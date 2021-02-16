function sumAll(arr) {
  const [ lower, upper ] = arr.sort((a,b) => a > b);
  let sum = 0;
  for (let i = lower; i<= upper; i++){
    sum += i;
  } 
  return sum;
}

sumAll([1, 4]);