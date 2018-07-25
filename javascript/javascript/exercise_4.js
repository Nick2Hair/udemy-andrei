var carOn = false;
var age = Number(prompt("How old are you?"));

if(age === 18) {
    carOn = true;
    alert("Congratulations on your first year of driving."
    +" Enjoy the ride! Is the car on? " +carOn);
}

if(age > 18) {
    carOn = true;
    alert("Powering on. Enjoy the ride! Is the car on? " +carOn);
}

if(age < 18) {
    carOn = false;
    alert("Sorry, you are too young to drive this car. Powering off. "
    + "Is the car on? " +carOn);
}


