describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should initiate as flying", function() {
    expect(plane.isFlying).toBe(true);
  });

  it('should set isFlying to false', function() {
    plane.land();
    expect(plane.isFlying).toBe(false);
  });
});
