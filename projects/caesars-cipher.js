function rot13(str) {
  function fixOffset(num){
    let offset = num - 13; //69 -13 -> 56
    if(offset >= 65){
      return num - 13;
    }
    return 91 - ( 65 - offset );
  }
  return str.split('').map(char => {
    if(!/[A-Z]/g.test(char)){
      return char;
    }
    return String.fromCharCode(fixOffset(char.charCodeAt()))
  }).join('');
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"))