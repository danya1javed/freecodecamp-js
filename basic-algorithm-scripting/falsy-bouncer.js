function bouncer(arr) {
  return arr.filter(item =>{
    if(item) return item
  });
}


bouncer([7, "ate", "", false, 9]);