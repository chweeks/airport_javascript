describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should initiate as flying", function() {
    expect(plane.isFlying).toBe(true);
  });

  it('can land', function() {
    expect( plane.land ).toEqual(jasmine.any(Function));
  });

  it('is landed after landing', function() {
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

  it('can take off', function(){
    expect( plane.take_off ).toEqual(jasmine.any(Function));
  });
});
