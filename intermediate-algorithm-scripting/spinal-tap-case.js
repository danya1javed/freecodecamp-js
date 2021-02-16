function spinalCase(str) {
  let formattedStr = str.replace(/(\B[A-Z])/g, " $1");
  return formattedStr.split(/[\s-_]/).filter(word => word.length > 0).map(word => {
    return word.trim().toLowerCase();
  }).join('-')
}

spinalCase('AllThe-small Things');