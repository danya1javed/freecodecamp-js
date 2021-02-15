function findElement(arr, func) {
  let num = undefined;
  for (let item of arr){
    if(func(item)){
      num = item;
      return num;
    }
  }
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);