function Weather() {
};

Weather.prototype.chance = function() {
  return Math.random();
};

Weather.prototype.isStormy = function() {
  if ( this.chance() >= 0.95) {
    return true;
  }
  else {
    return false
  };
};
