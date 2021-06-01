class Javabuzz {
  isDivisibleByThreeAndFive(number) {
    return this._isDivisibleBy(number, 3) && this._isDivisibleBy(number, 5);
  }
  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }
  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0)
  }

  says(number) {

    if (this.isDivisibleByThreeAndFive(number)) {
      return "Javabuzz";
    }
    if (this.isDivisibleByThree(number)) {
      return "Java";
    }
    if (this.isDivisibleByFive(number)) {
      return "Buzz";
    }
  }

}