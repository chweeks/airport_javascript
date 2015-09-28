describe("Airport", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
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
});
