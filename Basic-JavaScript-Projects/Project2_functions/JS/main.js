//This function takes and html element and repalces it with the string. 
function display_ButtonText() {
    var mystring = "Boo!"
    document.getElementById("Button_Text").innerHTML = mystring;
}

//This function concatenates the two strings together upon a user click event. 
function myNewFunction() {
    var mystring = "I just wanted to say...."
        mystring += "on second thought I don't have anything to say"
        document.getElementById("Concatenate").innerHTML = mystring;
}