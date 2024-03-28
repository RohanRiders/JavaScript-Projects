
//Practice using the TypeOf atribute. Here I was able to display the result to the browser. 
function myfunction() {
    var myvalue = document.write(typeof "Hello World");
    document.getElementById("somevalue").innerHTML = myvalue;
}

//Understanding NaN (not a number) and using isNaN() functions to validate a value type. 
function my_arithmatic_function() {
    document.getElementById("myMath").innerHTML = 0/0; 
}

function my_arithmatic_function() {
    document.getElementById("myMath").innerHTML = 0/0; 
}

function truth_detector() {
    document.getElementById("message").innerHTML = isNaN("This is a string");
}

function lie_detector() {
    document.getElementById("new_message").innerHTML = isNaN('007');
}

//Working with infinity and negative infinity
function infinity_function(){
  var myinfinity = document.write(2E310);
  document.getElementById("to_infinity").innerHTML = myinfinity;
}

function not_infinity_function(){
    var myNOTinfiinty = document.write(-3E310);
    document.getElementById("and_beyond").innerHTML = myNOTinfiinty;
}

//Let practice Boolean logic operators 
document.write(11 > 2);

document.write(55 >= 23);

document.write(100 < 2)

document.write(1 > 2);

//Exploring the console log method
console.log(2 + 2);

console.log(10 < 5);

console.log(100 == 100);

console.log(200 == 100);

//Learning how to use the triple equals operator

    var x = 10; 
    var y = 100; 
    document.write(x === y);

    var z = 50; 
    var w = "a string";
    document.write(z === w);

    var t = "my new string";
    var b = "my new string";
    document.write(t === b);

    var z = 27; 
    var w = "27";
    document.write(z === w);


//Learning how to use the && and || operators

document.write(10 > 4 && 5 < 10);

document.write(100 < 20 && 5 > 1);

document.write(3 < 5 || 10 > 1);

document.write(5 > 3 || 2 < 1);

//Learing to use the ! operator. Everything is opposite of the result. 

function not_function() {
    document.getElementById("is_Not").innerHTML = !(10 > 1);
}

function is_to_function() {
    document.getElementById("is_to").innerHTML = !(20 < 1);
}

//Learning Ternary Operators. Evaluating if someone can drive or not. 
function driver_eval_function() {
    var age, driver; 
    age = document.getElementById("age").value;
    driver = (age >= 16) ? "You can drive ":" You can not drive ";
    document.getElementById("licensed").innerHTML = driver + " the car";
}