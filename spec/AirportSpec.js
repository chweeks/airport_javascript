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

});
