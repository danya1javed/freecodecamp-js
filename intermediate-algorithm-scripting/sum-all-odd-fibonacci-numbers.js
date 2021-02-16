function sumFibs(num) {
  let sum = 0;
  let fibArr = [1, 1];
  for (let i = 2; i<num; i++){
    let fibNum = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(fibNum);
  }

  // console.log(sum, fibArr);
  return fibArr.filter(el => el & 1 && el <= num)
  .reduce((acc, curr) => acc + curr, 0);
}

sumFibs(4);