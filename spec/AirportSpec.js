describe("Airport", function() {
  var plane;
  var plane2;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    plane2 = new Plane();
    airport = new Airport();
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
});
