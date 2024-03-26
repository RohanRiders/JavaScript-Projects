//Learning the behavior of dictionaries. 
function my_dictionary() {
    var car = {
        trim:"XLE",
        model:"RAV4",
        make:"Toyota",
        sound:"Vroom!"
    };
    document.getElementById("dictionary").innerHTML = car.sound
}

// trying to see the behavior if you have two KVPs (i.e., "make")
function new_dictionary1() {
    var vehicle = {
        year:1991,
        make:"Chevy",
        make:"Malibu",
        trim:"That one",
        sound:"Ka-Chigga"
    };
    document.getElementById("new_Dictionary").innerHTML = vehicle.make;
}

//Showing that you can delete a key value pair. The result is undefined. 
function my_car_details() {
    var car = {
        trim:"XLE",
        model:"RAV4",
        make:"Toyota",
        sound:"Vroom!"
    };
    delete car.sound;
    document.getElementById("car_details").innerHTML = car.sound
}

