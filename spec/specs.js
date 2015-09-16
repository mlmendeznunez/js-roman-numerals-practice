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
//     expect(howLarge(10000)).to.equal("Oops! You entered a number greater than 3,999. Try again!");
//   });
// });


describe('howLarge', function(){
  it("returns error message for input greater than 3999", function(){
    expect(howLarge(4000)).to.equal("Your number is too large! We can only interpret up to 3,999.");
  });
});

describe('fiftyInterpreter', function() {
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


describe('thousandInterpreter', function() {
  it("Returns correct roman numeral for a digit between 900 and 3999", function() {
    expect(thousandInterpreter(3300)).to.equal("MMMCCC");
    expect(thousandInterpreter(12)).to.equal("XII");
  });
});

describe('oneHundredInterpreter', function() {
  it("Returns correct roman numeral for a digit in the late hundreds", function() {
    expect(oneHundredInterpreter(421)).to.equal("CDXXI");
    expect(oneHundredInterpreter(213)).to.equal("CCXIII");
    expect(oneHundredInterpreter(7)).to.equal("VII");
  });
});

describe('fiftyInterpreter', function() {
  it("Returns correct roman numeral for a digit between 50 and 100", function() {
    expect(fiftyInterpreter(95)).to.equal("XCV");
    expect(fiftyInterpreter(76)).to.equal("LXXVI");
    expect(fiftyInterpreter(54)).to.equal("LIV");
    expect(fiftyInterpreter(33)).to.equal("XXXIII");
    expect(fiftyInterpreter(11)).to.equal("XI");
  });
});

describe('tensInterpreter', function() {
  it("Returns correct roman numeral for a digit between 0 and 50", function() {
    expect(tensInterpreter(45)).to.equal("XLV");
    expect(tensInterpreter(22)).to.equal("XXII");
    expect(tensInterpreter(10)).to.equal("X");
    expect(tensInterpreter(9)).to.equal("IX");
    expect(tensInterpreter(6)).to.equal("VI");
    expect(tensInterpreter(5)).to.equal("V");
    expect(tensInterpreter(4)).to.equal("IV");
    expect(tensInterpreter(3)).to.equal("III");
  });
});
