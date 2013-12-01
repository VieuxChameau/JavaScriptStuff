var num = 10;
while (num > 0) {
    if (num % 2 == 0) {
        console.log(num);
    }
    num--;
}

var parkIsOpen = true;
if (parkIsOpen) {
    console.log("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
    console.log("Sorry, the Badlands are particularly bad today. We're closed!");
}

{
    var numSheep = 4;
    var monthsToPrint = 12;
    for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
        if (numSheep > 10000) {
            numSheep /= 2;
            console.log("Removing " + numSheep + " sheep from the population. Phew!");
        }
        numSheep *= 4;
        console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
    }
}

{
    var numSheep = 4;
    var monthsToPrint = 12;

    for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
        if (monthNumber % 4 == 0) {
            var nbToRemove = (numSheep / 4) * 3;
            numSheep -= nbToRemove;
            console.log("Removing " + nbToRemove + " sheep from the population. Phew!");
        } else if (numSheep > 10000) {
            numSheep /= 2;
            console.log("Removing " + numSheep + " sheep from the population. Phew!");
        }

        numSheep *= 4;
        console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
    }
}