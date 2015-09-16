
var romanNumerals = function(numberInput) {

var numsArray = numberInput.split();
var numsArrayLength = numsArray.length;

for (var i = 0; i < numsArrayLength; i++)

  if (numberArray[i] == 1){
  var latinString = latinString + "I";
    return latinString;
  }

};

var howLarge = function(numberInput) {
  debugger;
  var numsArray = numberInput.split("");
  if (numsArray.length == 4) {
    return "M";
  } else if (numsArray.length == 3) {
      if (numsArray[0] == 5) {
        return "D";
      } else {
        return "C";
      }
  } else if (numsArray.length == 2) {
      if(numsArray[0] == 5) {
        return "L";
      } else {
        return "X";
      }
  } else if (numsArray.length == 1) {
      if(numsArray[0] == 5) {
        return "V";
      } else {
        return "I";
      }
    }
    else {
      return "something broke";
    }

};

$(document).ready(function() {
  $("form#romanNumerals").submit(function(event) {
    var numberInput = $("input#number_input").val();
    var result = howLarge(numberInput);

    $(".answer").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
