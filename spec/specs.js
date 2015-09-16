describe('romanNumerals', function() {
  it("returns 1 for input 1", function() {
    expect(howLarge("1")).to.equal(1);
  });

  it("returns 4 for input 1000", function() {
    expect(howLarge("1000")).to.equal(4);
  });

  it("returns error message for input greater than 4 digits", function() {
    expect(howLarge("10000")).to.equal("Oops! You entered a number greater than 3,999. Try again!");
  });
});
