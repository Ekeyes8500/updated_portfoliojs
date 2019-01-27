//VARIABLES
///////////////////////////////////////////////////////////////////////////////////////////////////

//objects that are loaded into array with all info needed to display





//function to create project objects for display
function Project(imageSource, imageAlt, imageId, link, sourceLink, title, description, tags){
    this.imageSource = imageSource,
    this.imageAlt = imageAlt,
    this.imageId = imageId,
    this.link = link,
    this.sourceLink = sourceLink,
    this.title = title,
    this.description = description,
    this.tags = tags,
    this.placeArray = function(){
        
    }
}
var inventoryObject = new Project("assets/images/port5.png", 
    "cli app", "cliportfolio", 
    "", 
    "https://github.com/Ekeyes8500/cli_inventory",
    "CLI Inventory App",
    "A proof of concept Command Line Interface Node app that allows users to either buy products as a customer or manage product levels as a manager. All database information stored within a MySQL database.",
    ["javascript", "node.js", "mysql"]
);

var rmsObject = new Project(
    "assets/images/port1.png",
    "roommate management system",
    "rmsportfolio",
    "https://ekeyes8500.github.io/project1/",
    "https://github.com/Ekeyes8500/project1",
    "Roommate Management System (RMS)",
    "A proof of concept web app designed to create a persistent, easy to use, household management system. Not only is the planner synced with holidays, but all added events are stored to a firebase server. It also pulls from the bored API to generate randomly inspired events for the users. A proof of concept login, chat, to-do list, and billing system are also present within the app.",
    ["javascript", "html", "bootstrap", "css", "jquery", "firebase", "api"]
);

var starwarsObject = new Project(
    "assets/images/port2.png",
    "star wars hangman",
    "starwarsportfolio",
    "https://ekeyes8500.github.io/Word-Guess-Game/",
    "https://github.com/Ekeyes8500/Word-Guess-Game",
    "Star Wars Hangman",
    "A simple web game created using only HTML, CSS, Boostrap, and Javascript. Star Wars Hangman challenges the user with several Star Wars themed words to guess.",
    ["javascript", "html", "bootstrap", "css"]
);

var triviaObject = new Project(
    "assets/images/port3.png",
    "trivial endeavor",
    "triviaporfolio",
    "https://ekeyes8500.github.io/TriviaGame/",
    "https://github.com/Ekeyes8500/TriviaGame",
    "Trivial Endeavor",
    "A web game that challenges the user to historical and famous explorer based questions in an effort for the player to join a doomed expedition to the South Pole.",
    ["javascript", "html", "bootstrap", "css", "jquery"]
);

var falloutObject = new Project(
    "assets/images/port4.png",
    "fallout finder",
    "falloutportfolio",
    "https://spooky-beast-58911.herokuapp.com/",
    "https://github.com/Ekeyes8500/falloutFinder",
    "Fallout Finder",
    "An express web app that takes in user input on various questions, and hits a hosted API route to determine which Fallout 4 character they are most compatible traveling the wasteland with.",
    ["javascript", "html", "bootstrap", "css", "jquery", "api", "node.js", "express"]
);

var liriObject = new Project(
    "assets/images/port5.png",
    "liri node app",
    "liriportfolio",
    "",
    "https://github.com/Ekeyes8500/liri-node-app",
    "Liri Node Search App",
    "A CLI proof of concept Node.js app that takes in a commands that allows it to search several different APIs. It currently supports the Spotify API, Bands in Town API, and the OMBD API",
    ["javascript", "api", "node.js"]
);

var kingdomObject = new Project(
    "assets/images/port6.png",
    "self improvement kingdom",
    "kingdomportfolio",
    "https://nameless-thicket-61553.herokuapp.com/",
    "https://github.com/Ekeyes8500/self-improvement-kingdom",
    "Self-Improvement Kingdom",
    "Build your army and battle your way to self-improvement in this full-stack, gamified task manager!",
    ["javascript", "api", "node.js", "express", "mysql", "jquery", "handlebars", "html", "css", "bootstrap"]
);

var phillyObject = new Project(
    "assets/images/port8.png",
    "philly music scraper",
    "phillyportfolio",
    "https://sheltered-scrubland-86761.herokuapp.com/",
    "https://github.com/Ekeyes8500/philly-music-scraper",
    "Philly Music Scraper",
    "Track and comment on upcoming shows on a curated list of Philly venues, all scraped to one place!",
    ["javascript", "api", "node.js", "express", "mongodb", "jquery", "handlebars", "html", "css", "bootstrap", "scraper"]
);

var reccaObject = new Project(
    "assets/images/port7.png",
    "recca",
    "reccaportfolio",
    "http://recca.herokuapp.com/",
    "https://github.com/brijamfitz/Recca",
    "Recca",
    "Create a list and track what media you want to view and recommend your favorites to friends in this full stack, social media web app.",
    ["javascript", "react", "node.js", "api", "sass", "css", "html", "bootstrap", "express", "mongodb"]
)



//array that stores all objects
var projectArray = [reccaObject, kingdomObject, phillyObject, falloutObject, inventoryObject, rmsObject, starwarsObject, triviaObject, liriObject];


//tags for the filter generation
var tags = ["-Add Filter-", "Javascript", "HTML", "Bootstrap", "React", "Sass", "CSS", "JQuery", "MySQL", "API", "Firebase", "MongoDB", "Node.js", "Express", "Handlebars", "Scraper"];

//an array that stores all current tag values, used mainly for filtering
var currentTags = [];

//tracks how many filters are active, useful for resetting scene when no filters present
var filterTracker = 0;


//FUNCTIONS
///////////////////////////////////////////////////////////////////////////////////////////////////

//this function has one argument, x - which object to turn into a portfolio entry
function portfolioGenerator(x) {
    var newdiv = $("<div>");
    $(newdiv).addClass("media");
    $(newdiv).addClass("mb-5");
    $(newdiv).addClass("portfolio-holder")

    var newtitle = $("<h3>");
    $(newtitle).addClass("media-title");
    $(newtitle).text(x.title);
    $(newtitle).addClass("card-title")

    var newpicture = $("<img>");
    $(newpicture).attr("src", x.imageSource);
    $(newpicture).attr("alt", x.imageAlt);
    $(newpicture).attr("id", x.imageId);
    $(newpicture).addClass("mr-5");
    $(newpicture).addClass("portfolio-image");


    var textdiv = $("<div>");
    $(textdiv).addClass("media-body");
    $(textdiv).addClass("portfolio-text");
    
    var text = $("<div>");
    $(text).addClass("media-body");
    $(text).text(x.description);

    if (x.link != "") {
        var newlink = $("<a>");
        $(newlink).text("Link");
        $(newlink).attr("href", x.link);
        $(newlink).attr("target", "_blank");
        $(newlink).attr("style", "color: black");
        $(newlink).addClass("mr-3");

    }


    
    var sourcelink = $("<a>");
    $(sourcelink).attr("target", "_blank")
    $(sourcelink).text("Source Link");
    $(sourcelink).attr("style", "color: black");
    $(sourcelink).attr("href", x.sourceLink);

    $(textdiv).append(newtitle); 
    $(textdiv).append(text);   
    $(textdiv).append(newlink);
    $(textdiv).append(sourcelink);
    $(newdiv).append(newpicture);
    $(newdiv).append(textdiv);
    $("#portfolio_div").append(newdiv);
};

//this function checks the tags of each object in array to see if gets generated
function tagCheck(x){
    $("#portfolio_div").html("");
    for (i = 0; i < x.length; i++){
        var objectTags = x[i].tags;
        getsDisplayed = false;
        var tagCounter = 0;

        for (a = 0; a < objectTags.length; a++){
            var individualTag = objectTags[a];

            //override if no filters present, displays all
            if (currentTags.length === 0){
                getsDisplayed = true;
            } else {

                for (b = 0; b < currentTags.length; b++){
                    if (individualTag === currentTags[b]){
                        tagCounter++;
    
                        if (tagCounter === currentTags.length){
                            getsDisplayed = true;
                        }
                    }
                }
            }
        }

        if (getsDisplayed === true){
            portfolioGenerator(x[i]);
        }
    }
}



//creates a select menu based on 3 arguments, x = array given, y = how many options(including first header one), 
function selectmaker(x, y){
    var selectElement = $("<select>");
    var newselect = "<select>"
    var newvalue;

    for (i = 0; i < y; i++){
        newselect = newselect + "<option value="
        newvalue = x[i];
        if (i === 0){
            newvalue = ""
        }
        newselect = newselect + newvalue;
        newselect = newselect + ">"
        newselect = newselect + x[i];
        newselect = newselect + "</option>"
    }
    newselect = newselect + "</select>"
    $(selectElement).html(newselect);
    $(selectElement).attr("id", "filter");
    $(selectElement).addClass("mx-auto");
    $("#filter_div").append(selectElement);
}; 

//SCRIPT
///////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    //initial generation of all projects and filter
    tagCheck(projectArray)
    selectmaker(tags, tags.length);

    //listen event for change of filter select, counts as a selection
    $(document).on("change", "#filter", function(){
        var newFilter = $("#filter").val();
        newChecker = newFilter.toLowerCase();
        var isNew = true;
        for (i = 0; i < currentTags.length; i++){
            if (newChecker === currentTags[i]){
                isNew = false;
            }
        }
        if (isNew === true){
            filterTracker++;
            currentTags.push(newFilter.toLowerCase());
            var filterButton = $("<button>");
            $(filterButton).addClass("btn");
            $(filterButton).addClass("btn-Light");
            $(filterButton).addClass("mr-3");
            $(filterButton).addClass("filterBtn");
            $(filterButton).attr("val", newFilter.toLowerCase());
            $(filterButton).text(newFilter);
            $("#filterbtn_div").append(filterButton);
            tagCheck(projectArray);
        }
        
        $(this).remove();
        selectmaker(tags, tags.length);
    });

    $(document).on("click", ".filterBtn", function(){
        var removedTag = ($(this).attr("val"))
        for (i = 0; i < currentTags.length; i++){
            if (removedTag === currentTags[i]){
                currentTags.splice(i, 1);
            }
        }
        $(this).remove();
        filterTracker--;
        tagCheck(projectArray);
    })

    //opens mail client to email 
    $('#emaillogo').on('click',function(){
        window.location.href = "mailto:keyes.eric@outlook.com?subject=Subject&body=message%20goes%20here"; 
     });

    //section that determines what happens when the links at the top are clicked
    $("#portfolio").click(function(){
        $('html, body').animate({
            scrollTop: $("#portfolio-card").offset().top
        }, 1000);
    })
    
    $("#about").click(function(){
        $('html, body').animate({
            scrollTop: $("#about-scrolltarget").offset().top
        }, 1000);
    })
    $("#contact").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact-card").offset().top
        }, 1000);
    })
});

