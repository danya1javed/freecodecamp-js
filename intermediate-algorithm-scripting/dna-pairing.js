function pairElement(str) {
  const pairsMap = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  }
  const arr = [];
  for (let char of str) {
    arr.push([ char, pairsMap[char] ])
  }
  return arr;
}

pairElement("GCG");