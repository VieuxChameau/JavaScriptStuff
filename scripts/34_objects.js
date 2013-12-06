{ // 34.1
    var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
    var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
    var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

    console.log(vehicle1.capacity);
    console.log(vehicle1["capacity"]);

    var vehicles = [vehicle1, vehicle2, vehicle3];
    var findVehicle = function(name, list) {
        for (var i = 0; i < list.length; ++i) {
            if (list[i].type == name) {
                return list[i].storedAt;
            }
        }
    };
    findVehicle("Submarine", vehicles);


    vehicle1.capacity += 4;
// New proprety can be added after the creation of the object just by reference + assignment
    vehicle1.submersible = false;
    vehicle1.weapon = "Rear-Mounted Slingshot";
// Object property can be named with space, but should be access with brackets notation
    vehicle1["# of weapons"] = 1;

    vehicle2.submersible = false;
    vehicle2.weapon = "Lasers";
    vehicle2["# of weapons"] = 4;

    vehicle3.weapon = "Torpedoes";
    vehicle3["# of weapons"] = 8;
    vehicle3.capacity *= 2;
    vehicle3.submersible = true;

    var superBlinders = [["Firelight", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000]];
    var lighthouseRock = {
        gateClosed: true,
        bulbs: [200, 500, 750],
        capacity: 30,
        secretPassageTo: "Underwater Outpost"
    };

    delete lighthouseRock.bulbs;
    delete lighthouseRock["bulbs"];
    console.log(lighthouseRock.bulbs); // undefined
    lighthouseRock.weaponBulbs = superBlinders;
    console.log(lighthouseRock["weaponBulbs"][2][1]);



    var lighthouseRock = {
        gateClosed: true,
        weaponBulbs: superBlinders,
        capacity: 30,
        secretPassageTo: "Underwater Outpost",
        numRangers: 0
    };

    addRanger({name: "Nick Walsh", skillz: "magnification burn", station: 2});
    addRanger({name: "Drew Barontini", skillz: "uppercut launch", station: 3});
    addRanger({name: "Christine Wong", skillz: "bomb defusing", station: 1});

    function addRanger(location) {
        lighthouseRock["numRangers"]++;
        lighthouseRock["ranger" + lighthouseRock["numRangers"]] = location;
    }
}
{ // 34.2 Functions as properties
    var lighthouseRock = {
        gateClosed: true,
        weaponBulbs: superBlinders,
        capacity: 30,
        secretPassageTo: "Underwater Outpost",
        numRangers: 3,
        ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
        ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
        ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
        addRanger: function(name, skillz, station) {
            this.numRangers++;
            this["ranger" + this.numRangers] = {
                name: name,
                skillz: skillz,
                station: station
            }
        }
    };

    dontPanic(lighthouseRock);
    function dontPanic(location) {
        var list = "";
        for (var i = 0; i < location.numRangers; ++i) {
            list += "\n" + location["ranger" + (i + 1)].name +
                    ", man the " +
                    location.weaponBulbs[location["ranger" + (i + 1)].station - 1][0] + "!";
        }
        alert("Avast, me hearties!\nThere be Pirates nearby! Stations!" + list);
    }


    lighthouseRock.add("Jordan Wade", "dual-wield hand crossbow", 4);

// Add on the fly a new method to lighthouseRock object named addBulb
    lighthouseRock.addBulb = function(name, wattage) {
        this.weaponBulbs.push([name, wattage]);
    };

    lighthouseRock.addBulb("Blasterbright", 5000);
    lighthouseRock.addBulb("Sight Slayer", 1800);
    lighthouseRock.addBulb("Burner of Souls", 7500);


    var vehicle3 = {
        type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
        ranger1: {name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
        ranger2: {name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
        ranger3: {name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
        ranger4: {name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
        numRangers: 4
    };

    function relieveDuty(vehicle, day) {
        var offDuty = [];
        var onDuty = [];
        for (var i = 1; i <= vehicle["numRangers"]; ++i) {
            if (vehicle["ranger" + i]["dayOff"] == day) {
                offDuty.push(vehicle["ranger" + i]);
            } else {
                onDuty.push(vehicle["ranger" + i]);
            }
            delete vehicle["ranger" + i];
        }
        vehicle["numRangers"] = 0;
        for (var j = 1; j <= onDuty.length; ++j) {
            vehicle["ranger" + i] = onDuty[j - 1];
            vehicle["numRangers"]++;
        }
        return offDuty;
    }

    var offToday = relieveDuty(vehicle3, "Friday");
}

{ // 34.3 Enumerations
    var rockSpearguns = {
        Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
        Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
        Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
        Firefork: {barbs: 6, weight: 8, heft: "overhand"},
        "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
    };

    function listGuns(guns) {
        for (key in guns) {
            console.log(key);
        }
    }
    listGuns(rockSpearguns);

    function listGuns(guns) {
        for (var key in guns) {
            console.log("Behold! " + key + ", with " + guns[key].heft + " heft!");
        }
    }
    listGuns(rockSpearguns);


    var rockSpearguns = {
        Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
        Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
        Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
        Firefork: {barbs: 6, weight: 8, heft: "overhand"},
        "The Impaler": {barbs: 1, weight: 30, heft: "chest"},
        listGuns: function() {
            for (var property in this) {
                if (this[property]["heft"] != undefined) {
                    console.log("Behold! " + property +
                            ", with " + this[property] +
                            " heft!");
                }
            }
        }
    };
}