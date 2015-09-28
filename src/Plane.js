function Plane() {
  this.isFlying = true;
};

Plane.prototype.land = function() {
  this.isFlying = false;
};

Plane.prototype.take_off = function() {

};
