{ // 31.1
    var runAway = function() {
        var toAlert = "";
        for (var i = 0; i < 5; i++) {
            toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
        }
        alert(toAlert);
    };

    var people = 2;
    var rain = 10;
    var sharks = 5;

    var fearGenerated = function(numPeeps, rainInInches, numSharks) {
        var rainFear = numPeeps * rainInInches;
        var sharkFear = numSharks * numSharks * numSharks;
        var totalFear = sharkFear + rainFear;
        return totalFear;
    };

    var fear = fearGenerated(people, rain, sharks);

// Display the code of the function
    alert(fearGenerated);

    var fearMessage;

    if (fear < 200) {
        fearMessage = function() {
            return confirm('Fear Level: LOW\nShould be no problem at all...mwahaha.\nStill wanna ride?');
        };
    } else if (fear <= 300) {
        fearMessage = function() {
            return confirm('Fear Level: MEDIUM.\nYou may want to rethink this one, man. MWAHAHA!\nThink you\'ll make it?');
        };
    } else if (fear < 400) {
        fearMessage = function() {
            return confirm('Fear Level: HIGH\nABANDON ALL HOPE!!\nHave a death wish?');
        };
    }

    var startRide = confirmRide(fearMessage);


    function confirmRide(confirmToGo) {
        return confirmToGo();
    }
}

{ // 31.2 functions expressions as parameters
    var passengers = [["Thomas", "Meeks"],
        ["Gregg", "Pollack"],
        ["Christine", "Wong"],
        ["Dan", "McGaw"]];

    var modifiedNames = passengers.map(function(arrayCell) {
        return arrayCell[0] + ' ' + arrayCell[1];
    });

    var modifiedNames = ["Thomas Meeks",
        "Gregg Pollack",
        "Christine Wong",
        "Dan McGaw"];

    modifiedNames.map(function(arrayCell) {
        alert('Yo, ' + arrayCell[0] + '!');
    });

    var puzzlers = [function(number) {
            return 3 * number - 8;
        },
        function(number) {
            number += 2;
            return number * number * number;
        },
        function(number) {
            return 9 - number * number;
        },
        function(number) {
            return number % 4;
        }];
}

{ // 31.3 returned functions expressions and call
    function adventureSelector(userChoice) {
        if (userChoice == 1) {
            return function() {
                alert("You've selected the Vines of Doom!\nHope you have a swingin' time.");
            };

        } else if (userChoice == 2) {
            return function() {
                alert("Looks like you want the Lake of Despair!\nWatch out for crocs. And I ain't talkin' about shoes.");
            };
        } else if (userChoice == 3) {
            return function() {
                alert("The Caves of Catastrophe, really?\nAlright, well....nice knowing you.");
            };
        }
    }

    adventureSelector(3)();

    {
        var puzzlers = [
            function(a) {
                return 8 * a - 10;
            },
            function(a) {
                return (a - 3) * (a - 3) * (a - 3);
            },
            function(a) {
                return a * a + 4;
            },
            function(a) {
                return a % 5;
            }
        ];
        var start = 2;
        var applyAndEmpty = function(number, functions) {
            while (functions.length > 0) {
                number = functions.shift()(number);
            }
            return number;
        };

        applyAndEmpty(start, puzzlers);

        alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));
    }
}