function Airport() {
  this.hanger = [];
  this.capacity = 20;
  weather = new Weather()
};

Airport.prototype.instruct_to_take_off = function(plane){
  if(weather.isStormy() == true) {
    throw "Cannot take off in stormy weather"
    }
  else{
    for (i=0; i <= this.hanger.length; i++){
      if (this.hanger[i] == plane){
        plane.take_off();
        this.hanger.splice(i);
        break; }
      else{
        throw "Plane not in hanger";
        break; }
    }
  }
};

Airport.prototype.instruct_to_land = function(plane){
  if (weather.isStormy() == true) {
    throw "Cannot land in stormy weather"
  }
  else {
    if (this.hanger.length >= this.capacity) {
      throw "Hanger is full";}
   else {
      plane.land();
      this.hanger.push(plane)}
  }
};
