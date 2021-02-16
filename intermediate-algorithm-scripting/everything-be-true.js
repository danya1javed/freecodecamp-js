function truthCheck(collection, pre) {
  console.log(collection.every(obj => {
    return obj.hasOwnProperty(pre);
  }))
  return collection.every(obj => {
    return obj.hasOwnProperty(pre) && obj[pre];
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");