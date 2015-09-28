function Airport() {
  this.hanger = [];
};

Airport.prototype.instruct_to_take_off = function(plane){
  this.hanger.pop(plane)
};

Airport.prototype.instruct_to_land = function(plane){
  this.hanger.push(plane)
};
