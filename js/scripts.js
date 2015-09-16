
 var howLarge = function (number){
   //debugger;
   if (number > 1000 && number < 3999) {
     return thousandInterpreter(number);
   } else if (number < 1000 && number >= 500) {
     return fiveHundredInterpreter(number);
   } else if (number < 500 && number >= 100) {
     return oneHundredInterpreter(number);
   } else if (number < 100 && number >= 50) {
     return fiftyInterpreter(number);
   } else if (number < 50 && number >= 1) {
     return tensInterpreter(number);
   } else {
     return "Your number is too large! We can only interpret up to 3,999.";
   }
 };

 var thousandInterpreter = function(number) {
   //go to next
 }

 var fiveHundredInterpreter = function(number) {
 }

 var oneHundredInterpreter = function(number) {
   debugger;
      if(number >= 400) {
        return "CD" + oneHundredInterpreter(number - 400);
      } if (number >= 100) {
        return "C" + oneHundredInterpreter(number - 100);
      } if (0 < number < 100 ) {
       return fiftyInterpreter(number);
     }
 }

 var fiftyInterpreter = function(number) {
//debugger;
   if(number >= 90) {
     return "XC" + fiftyInterpreter(number - 90);
   } if (number >= 60) {
     return "LX" + fiftyInterpreter(number - 60);
   } if (number >= 50) {
     return "L" + fiftyInterpreter(number - 50);
   } if (number >= 0) { //account for numbers that do not need to be run through tensinterpreter
    return tensInterpreter(number);
  }
 }

 var tensInterpreter = function(number) {
  // debugger;
   if(number < 1) { return "";}
   if(number >= 40) {
     return "XL" + tensInterpreter(number - 40);
   } if (number >= 10) {
     return "X" + tensInterpreter(number - 10);
   } if (number >= 9) {
     return "IX" + tensInterpreter(number - 9);
   } if (number >= 5) {
     return "V" + tensInterpreter(number - 5);
   } if (number >= 4) {
     return "IV" + tensInterpreter(number - 4);
   } if (number >= 1) {
     return "I" + tensInterpreter(number - 1);
   }
   //return;
 }


$(document).ready(function() {
  $("form#romanNumerals").submit(function(event) {
    var numberInput = $("input#number_input").val();
    var result = howLarge(numberInput);

    $(".answer").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
