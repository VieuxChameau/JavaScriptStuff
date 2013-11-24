typeof true;
typeof "String";
typeof 42;
typeof undefined;
typeof null;

{
    var parkIsOpen = false;
    if (parkIsOpen) {
        alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
    } else {
        alert("Sorry, the Badlands are particularly bad today. We're closed!");
    }
}

{
    var userAge = prompt("What's your age, user?");
}

{
    var userAge = prompt("What's your age, user?");
    var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");
}

{
    var ageIsCorrect = false;
    while (!ageIsCorrect) {
        var userAge = prompt("What's your age user?");
        if (confirm("You entered " + userAge + ". Is this correct?")) {
            alert("Great! Your age is logged as .");
            ageIsCorrect = true;
        }
    }
}