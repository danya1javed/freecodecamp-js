const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let _fullName = firstAndLast;

  this.getFirstName = function() {
    return _fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return _fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return _fullName;
  };

  this.setFirstName = function(name) {
    _fullName = name + " " + _fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    _fullName = _fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    _fullName = name;
  };
  // let _fullName = firstAndLast.split(' ');
  // return {
  //   getFullName(){
  //     return _fullName[0] + " " + _fullName[1];
  //   },
  //   getFirstName(){
  //     return _fullName[0];
  //   },
  //   getLastName(){
  //     return _fullName[1];
  //   },
  //   setFullName(firstAndLast){
  //     _fullName = firstAndLast.split(' ');
  //   },
  //   setFirstName(first){
  //     _fullName[0] = first;
  //   },
  //   setLastName(last){
  //     _fullName[1] = last;
  //   },
  // }
};

var bob = new Person('Bob Ross');
console.log(bob instanceof Person);
