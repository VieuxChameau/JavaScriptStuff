{
    var hidden = mystery();
    var result = hidden(3); // 54

    function mystery( ) {
        var secret = 6;
        function mystery2(multiplier) {
            multiplier *= 3;
            return secret * multiplier;
        }
        return mystery2;
    }
}
{
    var hidden = mystery(4);
    var result = hidden(2); // 40

    function mystery(input) {
        var secret = 5;
        function mystery2(multiplier) {
            multiplier *= input;
            2 * 4
            return secret * multiplier;
        }
        return mystery2;
    }
}

{
    var hidden = mystery(3);
    var jumble = mystery3(hidden);
    var result = jumble(2); // 132

    function mystery(input) {
        var secret = 4;
        input += 2;
        function mystery2(multiplier) {
            multiplier *= input;
            return secret * multiplier;
        }
        return mystery2;
    }
    function mystery3(param) {
        function mystery4(bonus) {
            return param(6) + bonus;
        }
        return mystery4;
    }
}

{
    function warningMaker(obstacle) {
        return function(obstacle) {
            alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
        };
    }

    var killerPenguinAlert = warningMaker("killer penguin");
    var polarBearAlert = warningMaker("polar bear");
    var icebergAlert = warningMaker("iceberg");
    var flashBlizzardAlert = warningMaker("flash blizzard");
    var snowYetiAlert = warningMaker("snow yeti");
    killerPenguinAlert(6, "Ice Caves");
    snowYetiAlert(1, "Blizzard Beach");
}

{
    function warningMaker(obstacle) {
        var count = 0;
        return function(number, location) {
            count++;
            alert("Beware! There have been " +
                    obstacle +
                    " sightings in the Cove today!\n" +
                    number +
                    " " +
                    obstacle +
                    "(s) spotted at the " +
                    location +
                    "!\nThis is Alert " + count + " today for " + obstacle + " danger."
                    );
        };
    }
}

{
    function warningMaker(obstacle) {
        var count = 0;
        var zones = [];
        return function(number, location) {
            count++;
            zones.push(location + " (" + number + ")");
            var list = "";
            for (var i = 0; i < zones.length; i++) {
                list = list + "\n" + zones[i];
            }
            alert("Beware! There have been " +
                    obstacle +
                    " sightings in the Cove today!\n" +
                    number +
                    " " +
                    obstacle +
                    "(s) spotted at the " +
                    location +
                    "!\n" +
                    "This is Alert #" +
                    count +
                    " today for " +
                    obstacle +
                    " danger.\n" +
                    "Current danger zones are: \n" +
                    list
                    );
        };
    }

    var m = warningMaker("iceberg");
    m(3, "Blizzard Beach");
    m(12, "Ice Caves");
    m(20, "Frozen Falls");
}

{
    function assignLaser(shark, sharkList) {
        for (var i = 0; i < sharkList.length; i++) {
            if (shark == sharkList[i]) {
                return function() {
                    alert("Yo, " +
                            shark +
                            "!\n" +
                            "Visit underwater strapping station " +
                            i +
                            " for your sweet laser.\n" +
                            "'Bout to get real up in here."
                            );
                };
            }
        }
    }

    var listofSharks = ["Sea Pain", "Great Wheezy",
        "DJ Chewie", "Lil' Bitey",
        "Finmaster Flex", "Swim Khalifa",
        "Ice Teeth", "The Notorious J.A.W."];
    var listOfTargets = ["icicle bat", "snow yeti",
        "killer penguin", "frost tiger",
        "polar bear", "iceberg",
        "blue witch", "wooly mammoth"];
    function makeTargetAssigner(sharks, targets) {
        return function(shark) {
            for (var i = 0; i < sharks.length; ++i) {
                if (sharks[i] == shark) {
                    return function() {
                        alert("What up, " + shark + "!\nThere've been " + targets[i] + "  sightings in our `hood!\nTime for a swim-by lasering, homie!");
                    };
                }
            }

        };
    }

    var getTargetFor = makeTargetAssigner(listOfSharks, listOfTargets);
    getTargetFor("Ice Teeth");
}