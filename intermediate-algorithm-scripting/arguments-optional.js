function checkNum(num){
  return typeof num === 'number';
}
function addTogether() {
  let [ arg1, arg2 ] = arguments;
  if(!checkNum(arg1)) return undefined;
  if(arguments.length > 1) {
    return checkNum(arg2) ? arg1 + arg2 : undefined;
  } else {
    return function(num){
      return checkNum(num) ? arg1 + num : undefined;
    }
  }
}
console.log(checkNum("6"))
addTogether("http://bit.ly/IqT6zt")
addTogether(2,3);