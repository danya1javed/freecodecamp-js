function repeatStringNumTimes(str, num) {
  if(num <= 0) return '';
  let repeatedStr = '';
  while (num > 0){
    repeatedStr += str;
    num--;
  }
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);