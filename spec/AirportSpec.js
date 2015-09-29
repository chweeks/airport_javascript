describe("Airport", function() {
  var plane;
  var airport;

  beforeEach(function() {

    airport = new Airport();

    plane = {
      isFlying: function() {
        true;
      },
      land: function() {
        this.isFlying = false;
      },
      take_off: function(){
        this.isFlying = true
      }
    };
    weather = new Weather();
  });

  it('initiated with an empty hanger', function(){
    expect(airport.hanger.length).toBe(0)
  });

  it('can instruct a plane to take_off', function(){
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.instruct_to_land(plane)
    airport.instruct_to_take_off(plane)
    expect(airport.hanger.length).toEqual(0)
  });

  it('can instruct a plane to land', function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.instruct_to_land(plane)
    expect(airport.hanger).toEqual([plane])
  });

  it('Plane is flying after instructed to take off', function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.instruct_to_land(plane);
    airport.instruct_to_take_off(plane);
    expect(plane.isFlying).toBe(true);
  });

  it('Plane is landed after instructed to land', function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.instruct_to_land(plane);
    expect(plane.isFlying).toBe(false);
  });

  it("should have capacity when created", function() {
    expect(airport.capacity).toBe(20)
  });

  it('Plane can\'t land if hanger is full', function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.capacity = 1
    airport.instruct_to_land(plane)
    expect(function(){ airport.instruct_to_land(plane); }).toThrow("Hanger is full");
  });

  it('Can\'t instruct plane to take off if not in hanger', function(){
    spyOn(weather, 'isStormy').and.returnValue(false);
    expect(function(){airport.instruct_to_take_off(plane); }).toThrow("Plane not in hanger");
  });

  it('Can\'t take off in stormy weather', function(){
    airport.instruct_to_land(plane)
    spyOn(weather, 'isStormy').and.returnValue(true);
    expect(function(){airport.instruct_to_take_off(plane); }).toThrow("Cannot take off in stormy weather");
  });

  it('Can\'t land in stormy weather', function(){
    spyOn(weather, 'isStormy').and.returnValue(true);
    expect(function(){airport.instruct_to_land(plane); }).toThrow("Cannot land in stormy weather");
  });
});
