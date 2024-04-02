// Practicing a while loop 
function Call_Loop() {
    var Digit = "";
    var X = 0; 
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
// This is a for loop 
var car_list = ["chevy", "ford", "honda"];
var content = "";
var i; 

function for_Loop() {    
    for (i = 0; i < car_list.length; i++) {
        content += car_list[i] +"<br>";
    } document.getElementById("for_loop").innerHTML = content;
}

// Remember you set the index (i) counter, then the true condition, with the incrementer. 
var count = ""

function count_to_onehundred() {
    for (var i = 0; i <= 100; i++){
         count += "<br>" + i;
         document.getElementById("count_to_onehundred").innerHTML = count;
    }
}


// Practicing Arrays
var myNumbers = "";
function array_Function() {
 var my_array = ["1", "2", "3"]; 
 for (i = 0; i < my_array.length; i++)
    myNumbers = my_array[i];
    document.getElementById("Array").innerHTML = myNumbers;
}

//Utilizing constants (remember when you have a const as an object you can change the porperties)
function constant_function(){
    const jet_const = {US:"F-22 ", Russia:"SU-57 ", China:"J-20 "};
    var introduction = "The " + jet_const.US + "is the most powerful fighter jet in the world!"
     jet_const.China = "Boeing-747"
     jet_const.Japan = "Mitsubishi F-2"
    document.getElementById("constant").innerHTML = introduction; 
    document.getElementById("new_constant").innerHTML = jet_const.China; 
    document.getElementById("brand_new_constant").innerHTML = jet_const.Japan; 
}

//Utilizing the LET keyword (remember the LET keyword is block scoped)
var X = "Now you see me"
console.log(X); 
{
    let X = "Now you don't"
    console.log(X); 
}
console.log(X); 

//Utilizing the LET keyword with an object and properties. We will also be createing a method with in the object. 
let fighter_jet = {
    make:"F-22", 
    model:"Raptor",
    year:"2009", 
    manufactured:"Lockheed Martin", 
    jet_info: function()
        { return "The " + this.make + " is the most powerful jet in the world. " 
        + "Manufactured out of " + this.manufactured 
        + " It's stealth is second to none and is very agile."}
}; 

document.getElementById("practice_let_keyword").innerHTML = fighter_jet.jet_info();


//Practicing the Break and Continue statements
function breakFunction() {
    let text = "";
for (let i = 0; i < 25; i++) {
    if (i === 23) { break; }
    text += "The number is " + i + "<br>";
    document.getElementById("break_continue").innerHTML = text;
    };  
}; 


//Practicing the continue keyword.
function myBreakFunction() {
    var i ="";
    const carPart = ["engine","wheel", "bumper", "door"]; 
    for (i = 0, i < carPart.length; i++;) {
        if (carPart == "wheel") {
        break; 
        }
        else {
            continue;
        }
    } document.getElementById("demo").innerHTML = carPart;
}



