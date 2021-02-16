function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++){ // minus 1 to accomodate accessing i + 1;
    if(str[i+1].charCodeAt() - str[i].charCodeAt() !== 1){
      return String.fromCharCode(str[i].charCodeAt() + 1);
    }
  }
  return undefined;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");