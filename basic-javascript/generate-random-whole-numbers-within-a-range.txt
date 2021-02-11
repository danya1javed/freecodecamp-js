function randomRange(myMin, myMax) {
  // Only change code below this line
  /**
   * we take the diff of max & min so the new random number lies between the range. and  minus 1 to not exceed the max.
   * we add min so that new number is always greater the minimun number
   */
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}