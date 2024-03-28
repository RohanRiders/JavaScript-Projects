//Practicing concatenation
function complete_sentence() {
    var part1 = "I think ";
    var part2 = " it is important ";
    var part3 = " to remember ";
    var part4 = " where you came from ";
    whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("sentence").innerHTML = whole_sentence; 
}

//Working with the slice() method
function my_slice() {
    var some_sentence = "I wonder how I wonder";
    var section = some_sentence.slice(2, 9);
    document.getElementById("slice").innerHTML = section;
}

//practice using the upper case methods. 
function my_UpperCase() {
    var upperSentence = "This should appear upper case";
    var new_sentence = upperSentence.toUpperCase();
    document.getElementById("upper_case").innerHTML = new_sentence;
}

//practicing using the search method.
function mySearchFunction() {
var my_text = "Lets search for a word and give its position."
var new_search = my_text.search("give")
document.getElementById("search_method").innerHTML = new_search;
}

//practicing changing number to strings. 
function numToString() {
    var myNumber = 50;
    var newString = myNumber.toString(); 
    document.getElementById("mynum_ToString").innerHTML = newString; 
}

//Learning about the precision method
function myPrecision() {
    var myNumber = 1256832558.123654987;
    var preciseNumber = myNumber.toPrecision(5);
    document.getElementById("Precision").innerHTML = preciseNumber;

}

//Learning about the toFixed method
function theToFixed() {
    var someNumber = Math.PI;
    var newNumber = someNumber.toFixed(4); 
    document.getElementById("fixed").innerHTML = newNumber;
}

//Learning to use the Value Of method. 
function myValueOfFunction() {
    var myValue = 100;
    var newValue = myValue.valueOf();
    document.getElementById("value").innerHTML = newValue; 
}
