function chunkArrayInGroups(arr, size) {
  let multiDimArr = [];
  for (let i = 0; i < arr.length; i+=size){
    multiDimArr.push(arr.slice(i, i+size))
  }
  // console.log(multiDimArr);
  return multiDimArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);