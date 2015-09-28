function Airport() {
  this.hanger = [];
};

Airport.prototype.instruct_to_take_off = function(plane){
  this.hanger.pop(plane)
};
