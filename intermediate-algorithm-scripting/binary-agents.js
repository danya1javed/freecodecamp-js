function binaryAgent(str) {
  return str.split(" ").map(val => {
    return String.fromCharCode(parseInt(val, 2))
  }).join("");
  // console.log(wordBin)
  // console.log(spaceBin, wordBin, wordBin.map(val => {
  //   return parseInt(val, 2).toString(10)
  // }))
  // return wordBin.map(val => {
  //   parseInt(val, 2).toString(10)
  // });
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");