{ // 35.1
    var canyonCows = [
        {name: "Bessie", type: "cow", hadCalf: "Burt"},
        {name: "Donald", type: "bull", hadCalf: null},
        {name: "Esther", type: "calf", hadCalf: null},
        {name: "Burt", type: "calf", hadCalf: null},
        {name: "Sarah", type: "cow", hadCalf: "Esther"},
        {name: "Samson", type: "bull", hadCalf: null},
        {name: "Delilah", type: "cow", hadCalf: null}
    ];

    var valleyCows = [
        {name: "Danielle", type: "cow", hadCalf: null},
        {name: "Brittany", type: "cow", hadCalf: "Christina"},
        {name: "Jordan", type: "bull", hadCalf: null},
        {name: "Trevor", type: "bull", hadCalf: null},
        {name: "Christina", type: "calf", hadCalf: null},
        {name: "Lucas", type: "bull", hadCalf: null}
    ];

    var forestCows = [
        {name: "Legolas", type: "calf", hadCalf: null},
        {name: "Gimli", type: "bull", hadCalf: null},
        {name: "Arwen", type: "cow", hadCalf: null},
        {name: "Galadriel", type: "cow", hadCalf: null},
        {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
    ];


    Array.prototype.countCattle = function(type) {
        var counter = 0;
        for (var i = 0; i < this.length; ++i) {
            if (this[i].type == type) {
                ++counter;
            }
        }
        return ++counter;
    };

    alert((canyonCows.countCattle("calf") +
            valleyCows.countCattle("bull") +
            forestCows.countCattle("cow")));

    Object.prototype.noCalvesYet = function() {
        return this.type == "cow" && this.hadCalf == null;
    };

    Array.prototype.countForBreeding = function() {
        var numToBreed = 0;
        for (var i = 0; i < this.length; ++i) {
            if (this[i].noCalvesYet()) {
                ++numToBreed;
            }
        }
        return numToBreed;
    };

    var numPriorityCows = canyonCows.countForBreeding() + valleyCows.countForBreeding() + forestCows.countForBreeding() + badlandsCows.countForBreeding();
    alert("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");
}

{ // 35.2
    var genericPost =
            {x: 0, y: 0, postNum: undefined,
                connectionsTo: undefined,
                sendRopeTo: function(connectedPost) {
                    if (this.connectionsTo == undefined) {
                        var postArray = [];
                        postArray.push(connectedPost);
                        this.connectionsTo = postArray;
                    } else {
                        this.connectionsTo.push(connectedPost);
                    }
                }
            };

    var post1 = Object.create(genericPost);
    var post2 = Object.create(genericPost);

    post1.x = -2;
    post1.y = 4;
    post1.postNum = 1;

    post2.x = 5;
    post2.y = 1;
    post2.postNum = 2;

    post1.sendRopeTo(post2);
    post2.sendRopeTo(post1);


    var post8 = Object.create(genericPost);
    post8.x = 0;
    post8.y = -3;
    post8.postNum = 8;
    post8.lightsOn = false;

    var post9 = Object.create(genericPost);
    post9.x = 6;
    post9.y = 8;
    post9.postNum = 9;
    post9.numBirds = 0;
    post8.lightsOn = false;

    var post10 = Object.create(genericPost);
    post10.x = -2;
    post10.y = 3;
    post10.postNum = 10;
    post10.weathervane = "N";
    post10.lightsOn = false;

    post8.sendRopeTo(post10);
    post9.sendRopeTo(post10);
    post10.sendRopeTo(post8);
    post10.sendRopeTo(post9);


    function Fencepost(x, y, postNum) { // Ctor
        this.x = x;
        this.y = y;
        this.postNum = postNum;
        this.connectionsTo = [];
    }

    Fencepost.prototype = {
        sendRopeTo: function(connectedPost) {
            this.connectionsTo.push(connectedPost);
        },
        removeRope: function(removeTo) {
            var temp = [];
            for (var i = 0; i < this.connectionsTo.length; i++) {
                if (this.connectionsTo[i].postNum != removeTo) {
                    temp.push(this.connectionsTo[i]);
                }
            }
            this.connectionsTo = temp;
        },
        movePost: function(x, y) {
            this.x = x;
            this.y = y;
        }
    };

    var post18 = new Fencepost(-3, 4, 18);
    var post19 = new Fencepost(5, -1, 19);
    var post20 = new Fencepost(-2, 10, 20);

    post18.sendRopeTo(post20);
    post20.sendRopeTo(post18);

    post18.sendRopeTo(post19);
    post19.sendRopeTo(post18);
}

{ // 35.3 Overriding method prototype
    Fencepost.prototype.valueOf = function() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };

    Fencepost.prototype.toString = function() {
        var result = "Fence post #" + this.postNum + ":\nConnected to posts:";
        for (var i = 0; i < this.connectionsTo.length; ++i) {
            result += "\n" + this.connectionsTo[i].postNum;
        }
        result += "\nDistance from ranch: " + this.valueOf() + " yards";
        return result;
    };
}