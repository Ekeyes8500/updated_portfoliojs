//VARIABLES
///////////////////////////////////////////////////////////////////////////////////////////////////

//objects that are loaded into array with all info needed to display
var rmsObject = {
    imageSource: "assets/images/port1.png",
    imageAlt: "roommate management system",
    imageId: "rmsportfolio",
    link: "https://ekeyes8500.github.io/project1/",
    sourceLink: "https://github.com/Ekeyes8500/project1",
    title: "Roommate Management System (RMS)",
    description: "A proof of concept web app designed to create a persistent, easy to use, household management system. Not only is the planner synced with holidays, but all added events are stored to a firebase server. It also pulls from the bored API to generate randomly inspired events for the users. A proof of concept login, chat, to-do list, and billing system are also present within the app.",
    tags: ["javascript", "html", "bootstrap", "css", "jquery", "momentjs", "firebase", "api"]
};

var starwarsObject = {
    imageSource: "assets/images/port2.png",
    imageAlt: "star wars hangman",
    imageId: "starwarsportfolio",
    link: "https://ekeyes8500.github.io/Word-Guess-Game/",
    sourceLink: "https://github.com/Ekeyes8500/Word-Guess-Game",
    title: "Star Wars Hangman",
    description: "A simple web game created using only HTML, CSS, Boostrap, and Javascript. Star Wars Hangman challenges the user with several Star Wars themed words to guess.",
    tags: ["javascript", "html", "bootstrap", "css"]
};

var triviaObject = {
    imageSource: "assets/images/port3.png",
    imageAlt: "trivial endeavor",
    imageId: "triviaporfolio",
    link: "https://ekeyes8500.github.io/TriviaGame/",
    sourceLink: "https://github.com/Ekeyes8500/TriviaGame",
    title: "Trivial Endeavor",
    description: "A web game that challenges the user to historical and famous explorer based questions in an effort for the player to join a doomed expedition to the South Pole.",
    tags: ["javascript", "html", "bootstrap", "css", "jquery", "timers"]
};

var giphyObject = {
    imageSource: "assets/images/port4.png",
    imageAlt: "giphy animal search",
    imageId: "giphyportfolio",
    link: "https://ekeyes8500.github.io/giphySearch/",
    sourceLink: "https://github.com/Ekeyes8500/giphySearch",
    title: "Giphy Animal Search",
    description: "A mini, proof of concept web app based on creating a personalized giphy search for animals by pulling from the giphy API.",
    tags: ["javascript", "html", "bootstrap", "css", "jquery", "api"]
};

//array that stores all objects
var projectArray = [rmsObject, starwarsObject, triviaObject, giphyObject];

//tags for the filter generation
var tags = ["-Add Filter-", "Javascript", "HTML", "Bootstrap", "CSS", "JQuery", "API", "Timers", "Firebase", "Momentjs"];

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
    $(newpicture).addClass("ml-2");
    $(newpicture).addClass("mr-5");
    $(newpicture).addClass("portfolio-image")

    var textdiv = $("<div>");
    $(textdiv).addClass("media-body");
    $(textdiv).addClass("portfolio-text");
    
    var text = $("<div>");
    $(text).addClass("media-body");
    $(text).text(x.description);

    var newlink = $("<a>");
    $(newlink).text("Link");
    $(newlink).attr("href", x.link);
    $(newlink).attr("target", "_blank");
    $(newlink).addClass("mr-3");

    var sourcelink = $("<a>");
    $(sourcelink).attr("target", "_blank")
    $(sourcelink).text("Source Link");
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
            console.log(currentTags);
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
        console.log(removedTag);
        for (i = 0; i < currentTags.length; i++){
            if (removedTag === currentTags[i]){
                currentTags.splice(i, 1);
                console.log(currentTags);
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

