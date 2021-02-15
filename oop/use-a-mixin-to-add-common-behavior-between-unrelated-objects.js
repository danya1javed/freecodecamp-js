let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
function glideMixin(obj) {
  obj.glide = function(){
    console.log("glide");
  }
}
// works on the principle of pass by reference for non-primitive values - mixins
glideMixin(bird);
glideMixin(boat);