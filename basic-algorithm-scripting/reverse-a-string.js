function reverseString(str) {
  // str = str.split('');
  // let i = 0;
  // while(i < str.length / 2) {
  //   [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i],  str[i]];
  //   i++;
  // }
  // return str.join('');

  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--){
    reverseString += str[i];
  }
  return reverseString;
}

reverseString("hello");
