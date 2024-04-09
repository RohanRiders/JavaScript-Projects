function animal_selector() {
   var animal_output;
    var animal = document.getElementById("animal_input").value;
   var animal_string = " are cool animals!";
   switch(animal) {
    case "Eagle":
        animal_output = "Eagles" + animal_string;
    break;
    case "Lions":
        animal_output = "Lions" + animal_string;
    break;
    case "Tiger":
        animal_output = "Tigers" + animal_string;
    break;
    case "Bears":
        animal_output = "Bears" + animal_string;
    break;
    default:
        animal_output = "Please enter an animal exactly as written on the above list.";

   }
   document.getElementById("Output").innerHTML = animal_output;

}

//changing the text with GetElementClassName method. 
function my_function() {
    var myVar = document.getElementsByClassName("click_clack");
    myVar[0].innerHTML = "This text has changed!";
}

//Using JS to draw graphics using the canvas element. 
/*const myCanvas = document.getElementById("canvas_id");
const context = myCanvas.getContext("2d");
context.fillStyle = "green";
context.fillRect(20, 20, 150, 100);*/

//using the gradient canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Create a Gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100); 

