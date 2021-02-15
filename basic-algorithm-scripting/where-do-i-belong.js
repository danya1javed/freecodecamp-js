function getIndexToIns(arr, num) {
  if(arr.length === 0) return 0; // empty array
  const sortedArr = arr.sort((a,b) => a > b);
  if(num <= arr[0]) return 0; // num is smallest
  for (let i = 0; i < arr.length - 1; i++){
    if(num >= sortedArr[i] && num <= sortedArr[i + 1]) {
      return i + 1;
    }
  }
  return arr.length; // num is largest
}

getIndexToIns([2, 5, 10], 15);