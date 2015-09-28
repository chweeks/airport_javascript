function Airport() {
  this.hanger = [];
  this.capacity = 20;
};

Airport.prototype.instruct_to_take_off = function(plane){
  this.hanger.pop(plane)
};

Airport.prototype.instruct_to_land = function(plane){
  if (this.hanger <= this.capacity) {
    this.hanger.push(plane)
} else {
      throw "Hanger is full";
}
};
