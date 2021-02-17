function palindrome(str) {
  const filterStr = str.replace(/[\W_]/g, '').toLowerCase();
  for(let i = 0; i < filterStr.length; i++){
    if(filterStr[i] !== filterStr[filterStr.length - i - 1]){
      return false;
    }
  }
  return true;
}



palindrome("eye");
palindrome("race car")
palindrome("A man, a plan, a canal. Panama")