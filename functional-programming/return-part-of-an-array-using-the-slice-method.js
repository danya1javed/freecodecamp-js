function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  let cpyArr = [...anim];
  return cpyArr.slice(beginSlice, endSlice)  

  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);