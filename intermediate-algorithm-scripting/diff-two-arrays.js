function diffArray(arr1, arr2) {
  // let newArr = [...arr1, ...arr2].filter(el => {
  //   return (arr1.indexOf(el) === -1 && arr2.indexOf(el) !== -1) ||
  //   (arr1.indexOf(el) !== -1 && arr2.indexOf(el) === -1)
  // })
  // console.log(newArr);
  // return newArr;
  
  // approach after hint
  let filter1 = arr1.filter(el => arr2.indexOf(el) === -1)
  let filter2 = arr2.filter(el => arr1.indexOf(el) === -1)
  return [...filter1, ...filter2]
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);