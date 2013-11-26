 jQuery(document).ready(function(){
            jQuery("h1");
            console.log("Text = " + $("h1").text());
            $("h1").text("Replace Text");
            
            $("#countries").text("Canada");
            
            $(".defaultCity").text("Indianna");
            
            $("#cheese li").text(); // Descendant selector include frenchCheese li
            $("#cheese").find("li"); // Descendant selector include frenchCheese li
            
            $("#cheese > li").text(); // Descendant selector only li first child
            $("#cheese").children("li");
            
            $("#countries,  #cheese").text(); // Select counties and cheese
            
            $("#countries li:first").text(); // Select first li under countries
            $("#countries li").first(); // Descendant selector include frenchCheese li
            
            $("#countries li:last").text(); // Select last li under countries
            
            $("#countries li:odd").text(); // Select all odd li under countries
            
            $("#countries li:even").text(); // Select all even li under countries
            
            // iterate over li
            $("#cheese").find("li").next();
            // avant dernier
            $("#cheese").find("li").last().prev();
            
            $("#cheese").find("li").parent().text();
            
            console.log($("#cheese").find("li").parent().text());
        });