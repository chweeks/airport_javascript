function Weather() {
};

Weather.prototype.isStormy = function() {
  if ( this.chance() >= 0.95) {
    return true;
  } else {
  return false;}
};

Weather.prototype.chance = function() {
  Math.random();
};
