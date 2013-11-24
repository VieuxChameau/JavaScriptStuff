{
    var num = 10;
    while (num >= 1) {
        console.log(num--);
    }

    var numSheep = 4;
    var monthNumber = 1;
    var monthsToPrint = 12;

    while (monthNumber <= 12) {
        numSheep *= 4;
        console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
        ++monthNumber;
    }
}
{
    for (var index = 10; index > 0; --index) {
        console.log(index);
    }

    var numSheep = 4;
    var monthsToPrint = 12;

    for (var monthNumber = 1; monthNumber <= monthsToPrint; ++monthNumber) {
        numSheep *= 4;
        console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
    }

    var currentGen = 1;
    var totalGen = 19;
    var totalMW = 0;

    while (currentGen < 5) {
        totalMW += 62;
        console.log("Generator #" + currentGen++ + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    }

    for (; currentGen <= totalGen; ++currentGen) {
        totalMW += 124;
        console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
    }
}

{
    var totalGen = 19;
    var totalMW = 0;

    for (var i = 1; i <= 19; ++i) {
        var mwToAdd = 124;
        if (i < 5) {
            mwToAdd = 62;
        }

        if (i % 2 != 0) {
            console.log("Generator #" + i + " is off.");
        } else {
            totalMW += mwToAdd;
            console.log("Generator #" + i + " is on, adding " + mwToAdd + " MW, for a total of " + totalMW + " MW!");
        }
    }
}