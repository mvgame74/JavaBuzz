describe('Javabuzz', function() {

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is multiple of 3 and 5', function() {

    it('is divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });

    it('is not divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByThreeAndFive(1)).toBe(false);
    });

  }); 

  describe('knows when a number is multiple of 3', function() {

    it('is divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('is not divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  
  });

  describe('knows when a number is multiple of 5', function() {

    it('is divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('is not divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

  });

});