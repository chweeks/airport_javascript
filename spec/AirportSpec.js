describe("Airport", function() {
  var plane;
  var plane2;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    plane2 = new Plane();
    airport = new Airport();
    weather = new Weather();
  });

  it('initiated with an empty hanger', function(){
    expect(airport.hanger.length).toBe(0)
  });

  it('can instruct a plane to take_off', function(){
    airport.instruct_to_land(plane)
    airport.instruct_to_take_off(plane)
    expect(airport.hanger.length).toEqual(0)
  });

  it('can instruct a plane to land', function() {
    airport.instruct_to_land(plane)
    expect(airport.hanger).toEqual([plane])
  });

  it("should have capacity when created", function() {
    expect(airport.capacity).toBe(20)
  });

  it('Plane can\'t land if hanger is full', function() {
    airport.capacity = 1
    airport.instruct_to_land(plane)
    expect(function(){ airport.instruct_to_land(plane2); }).toThrow("Hanger is full");
  });

  it('Can\'t instruct plane to take off if not in hanger', function(){
    expect(function(){airport.instruct_to_take_off(plane); }).toThrow("Plane not in hanger");
  });

  it('Can\'t take off in stormy weather', function(){
    airport.instruct_to_land(plane)
    spyOn(weather, 'chance').and.returnValue(0.95);
    expect(function(){airport.instruct_to_take_off(plane); }).toThrow("Cannot take off in stormy weather");
  });

  it('Can\'t land in stormy weather', function(){
    spyOn(weather, 'chance').and.returnValue(0.95);
    expect(function(){airport.instruct_to_land(plane); }).toThrow("Cannot land in stormy weather");
  });

  it('Plane is flying after instructed to take off', function() {
    airport.instruct_to_land(plane);
    airport.instruct_to_take_off(plane);
    expect(plane.isFlying).toBe(true);
  });

  it('Plane is landed after instructed to land', function() {
    airport.instruct_to_land(plane);
    expect(plane.isFlying).toBe(false);
  });
});
