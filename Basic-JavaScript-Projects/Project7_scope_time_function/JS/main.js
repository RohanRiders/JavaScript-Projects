

//practicing global and local variables 
var myglobalvar = "Whats up world!";

function myfunction() {
    var mylocalvar = " How are you doing today?";
    var result = myglobalvar + mylocalvar; 
    document.getElementById("someID").innerHTML = result; 
}

//Practicing using the console.log
/*function ArithmaticFunction() {

    var num1 = 1; 
    var num2 = $%^&;

    var result = num1 * num2; 
    console.log(result);
}
*/

//Working with conditional statements. 
function get_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("conditionals").innerHTML = "Good Morning!";
    }
}

//Practicing taking in a user input value and providing a result. 
function get_age() {
    var userInput = document.getElementById("driverEligibility").value
    if (userInput < 16) {
        document.getElementById("eligibilityResults").innerHTML = "You are not yet old enough to drive!";
    }

    else { 
        output = "Congrats, you are old enough to drive!"
        document.getElementById("eligibilityResults").innerHTML = output;
    }
}

//Practicing Else IF statements 

function vote_function() {
    var age_input = document.getElementById("vote").value;
    if (age_input <= 17) {
        age_input = "No, you are NOT eligible to vote!"
    }
     else if (age_input >= 18) {
        age_input = "Yes, you are eligible to vote!"
     }
     else {
        age_input  = "Not a valid input!"
     }

     document.getElementById("vote_age_results").innerHTML = age_input;
}
