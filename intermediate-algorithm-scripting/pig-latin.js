function translatePigLatin(str) {
  /**
   * replace vowel with way
   * for consonants replace it with ay at end
   * but the complete set of consonant.
   * 
   */
  let newStr = '';
  if(['a', 'e', 'i', 'o', 'u'].indexOf(str[0]) !== -1){
    newStr = str + 'way';
  } else {
    let idx = str.search(/[aeiou]/);
    if(idx > 0) {
      newStr = str.slice(idx) + str.slice(0, idx) + 'ay';
    } else {
      newStr = str + 'ay';
    }
  }
  return newStr;
}

translatePigLatin("rhythm");