var names = ["John", "Toto"];

console.log(names.length);

var lastElem = names.pop(); // remove last element

names.push(lastElem); // add to the end

{
    var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];
    list[3] = 4;
}

{
    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    list.push(10);
}

{
    var values = ["A string", 5, true];
}

{
    var values = ["Jason", 4, true];
    var bool = values.pop();
    var number = values.pop();
    var string = values.pop();
}

{
    var movie1 = [16, "Candles"];
    var movie2 = [3, "Men", "and", "a", "Baby"];
    var eightiesMovies = [movie1, movie2];

    var infant = eightiesMovies[1][4];
    alert(eightiesMovies[0][0] + " " + eightiesMovies[0][1])
}

function numStrings(list) {
    var nbStrings = 0;
    for (var i = 0; i < list.length; ++i) {
        if ((typeof list[i]) == "string") {
            ++nbStrings;
        }
    }
    return nbStrings;
}