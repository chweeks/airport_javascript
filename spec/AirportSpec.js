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
    airport.hanger.push(plane)
    airport.instruct_to_take_off(plane)
    expect(airport.hanger.length).toEqual(0)
  });

});
