// describe('romanNumerals', function() {
//   it("returns 1 for input 1", function() {
//     expect(howLarge("1")).to.equal(1);
//   });
//
//   it("returns 4 for input 1000", function() {
//     expect(howLarge("1000")).to.equal(4);
//   });
//
//   it("returns error message for input greater than 4 digits", function() {
//     expect(howLarge("10000")).to.equal("Oops! You entered a number greater than 3,999. Try again!");
//   });
// });

describe('oneHundredInterpreter', function() {
  it("Returns correct roman numeral for a digit in the hundreds", function() {
    expect(oneHundredInterpreter(425)).to.equal("CDXXV");
  });
});

describe('fiveHundredInterpreter', function() {
  it("Returns correct roman numeral for a digit in the late hundreds", function() {
    expect(fiveHundredInterpreter(532)).to.equal("DXXXII");
    expect(fiveHundredInterpreter(779)).to.equal("DCCLXXIX");
    expect(fiveHundredInterpreter(949)).to.equal("CMXLIX");
    expect(fiveHundredInterpreter(14)).to.equal("XIV");
  });
});
