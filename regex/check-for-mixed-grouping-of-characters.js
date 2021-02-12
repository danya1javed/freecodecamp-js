let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)[ \w.]* Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
const newString = "Taab Tib";
console.log(/T(\w){1,}b/.test(newString))
