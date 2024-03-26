
function Add() {
    var mynumber1 = 10;
    var mynumber2 = 50; 
    result1 = mynumber1 + mynumber2;
    document.getElementById("Math").innerHTML = result1;
}

function Subtraction() {
    var mysubstraction = 6 - 5; 
    document.getElementById("MoreMath").innerHTML = "The result is: " + mysubstraction;
}

function Multiplication() {
    var mymultiplyer = 5 * 8;
    document.getElementById("SomMoMath").innerHTML = "What is the result of 5 x 8? " + mymultiplyer;
}

function Division() {
    var mydivision = 25 / 5;
    document.getElementById("alotofMath").innerHTML = "What is the result of 25 / 5? " + mydivision;
}

function simple_math() {
    var multiple_maths = (2 + 5) * 8 / 4 - 3;
    document.getElementById("LargeMaths").innerHTML = "The result of this is: " + multiple_maths;
}

function modulus_operator() { 
    var simple_math = 25 % 6; 
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negation_operator() {
var mynegation = 50;
document.getElementById("negationOp").innerHTML = "This is the result of the negation: " + -mynegation;
}

function increment() {
    var myIncrease = 5;
    myIncrease++;
    document.write(myIncrease);
}

function decrement() {
    var mydecrement = 10;
    mydecrement--;
    document.write(mydecrement);
}

window.alert(Math.random());

window.alert(Math.random() * 100);

var x = window.alert(Math.PI);
console.log(x);

var z = window.alert(Math.round(76.3));
console.log(z);
