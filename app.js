$(document).ready(function() {

    //Change red on click
    $(document).on("click", "#change-red", function() {
        $("#red-div").css("background-color", "red");
    });

    //Change green on click
    $(document).on("click", "#change-green", function() {
        $("#green-div").css("background-color", "green");
    });

    //Change blue on click
    $(document).on("click", "#change-blue", function() {
        $("#blue-div").css("background-color", "blue");
    });

    //Make div larger on click
    $(document).on("click", "#make-big", function() {
        $("#big-div").addClass("big-red-div");
    });

    //Make div smaller on click
    $(document).on("click", "#make-small", function() {
        $("#small-div").addClass("small-green-div");
    });

    //Make div animate on click
    $(document).on("click", "#animate-div", function() {
        $("#animate").addClass("rotating-div");
    });

    //Overlay open on click
    $(document).on("click", "#create-overlay", function() {
        $("#overlay-div").addClass("overlay-open")
        $("#overlay-div").html("<button id='close-overlay'>&times;</button>");
    });

    //Overlay close on click
    $(document).on("click", "#close-overlay", function() {
        $("#overlay-div").hide();
    });

});
