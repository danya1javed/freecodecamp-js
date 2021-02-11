function rangeOfNumbers(startNum, endNum) {
  if(startNum >= endNum ){
    return [endNum];
  } else {
    return [startNum, ...rangeOfNumbers(startNum + 1, endNum)]
  }
};
console.log(rangeOfNumbers(1,5))