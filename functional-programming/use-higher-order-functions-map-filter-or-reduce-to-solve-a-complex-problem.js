const squareList = arr => {
  // Only change code below this line
  return arr.filter(item => {
    return item > 0 && parseInt(item) === item
  }).map(item => item*item);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);