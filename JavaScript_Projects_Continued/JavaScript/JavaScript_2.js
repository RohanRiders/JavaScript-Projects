function validationForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Your full name must be filled out");
        return false; 
    }
}