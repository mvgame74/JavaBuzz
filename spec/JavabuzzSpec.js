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

  describe('when playing, says', function() {

    it('"Javabuzz" when a number is divisible by 3 and 5', function() {
      expect(javabuzz.says(15)).toEqual("Javabuzz");
    });

    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

  });

});