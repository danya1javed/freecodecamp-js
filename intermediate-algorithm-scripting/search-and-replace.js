function myReplace(str, before, after) {
  let wordCase = str.charCodeAt(str.search(before)) >= 97 ?
    after.toLowerCase() : // lowerCase 
    after[0].toUpperCase() + after.slice(1); // uppercase
  return str.replace(before, wordCase);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");