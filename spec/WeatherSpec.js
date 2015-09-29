describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  })

  it('is stormy 5% of the time', function() {
    spyOn(weather, 'chance').and.returnValue(0.95);
    expect(weather.isStormy()).toBe(true);
  });
});
