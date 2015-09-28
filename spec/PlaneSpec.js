describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should initiate as flying", function() {
    expect(plane.isFlying).toBe(true);
  });
});
