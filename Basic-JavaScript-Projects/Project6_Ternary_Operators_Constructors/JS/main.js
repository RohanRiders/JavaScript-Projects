//Learning Ternary Operators. Evaluating if someone can drive or not. 
function driver_eval_function() {
    var age, driver; 
    age = document.getElementById("age").value;
    driver = (age >= 16) ? "You can drive ":" You can not drive ";
    document.getElementById("licensed").innerHTML = driver + " the car";
}

function vote_eval_function() {
    var age, voter; 
    age = document.getElementById("age").value;
    voter = (age >= 18) ? "You can vote":"You can not vote";
    document.getElementById("elegable").innerHTML = voter + " in the election";
}

//learning to create a constructor, instantiate new objects from the constructor and then use the newly made objects in a valuable way. 
function Airplane(Make, Model, Year, Color) {
    this.Airplane_Make = Make;
    this.Airplane_Model = Model; 
    this.Airplane_Year = Year; 
    this.Airplane_Color = Color; 
}

var UnitedStates = new Airplane("F-22", "Raptor", "2024", "Grey"); 
var Russia = new Airplane("Su-57", "Sukhoi", "2024", "Camo"); 
var China = new Airplane("J-20", "CCP", "2024", "Grey");

function FifthGenFighters(){
    document.getElementById("Aviation").innerHTML = "Here are the 5th Gen fighter jets in use today. First, we have the " + UnitedStates.Airplane_Make + " made by the United states. Second we have the "+ China.Airplane_Make + 
    " made by China and third we have " + Russia.Airplane_Make + " made by Russia!";
}


//Object constructor function
function personal_info(age, fname, lname, weight, height) {
    this.personal_age = age; 
    this.personal_fname = fname; 
    this.personal_lname = lname; 
    this.personal_weight = weight; 
    this.personal_height = height; 
}


//Here is an example of a nested function
function NestedFunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point = 9; 
        function Plus_one() {starting_point += 1;}
        Plus_one();
        return starting_point;
    }
        
}