function mutation(arr) {
  let caseInsensitiveArr = arr.map(item => item.toUpperCase());
  for(let char of caseInsensitiveArr[1]){
    if(caseInsensitiveArr[0].indexOf(char) === -1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);