function countOnline(usersObj) {
  // Only change code below this line
  let countOnline = 0;
  for (let item in usersObj){
    if(usersObj[item].online){
      countOnline++;
    }
  }
  console.log(countOnline)
  return countOnline;
  // Only change code above this line
}