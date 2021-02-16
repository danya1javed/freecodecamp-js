function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter(obj => {
    let match = true;
    for ( let prop in source){
      if(obj[prop] !== source[prop]) {
        return false
      }
    }
    return match;
  })
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });