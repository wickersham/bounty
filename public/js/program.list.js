$(document).ready(function(){
    var programList = [];
    var $test = $("#test");
    //These are references to the select drop down boxes for search functionality
    var $cost = $("#cost");
    var $county = $("#county");
    var $duration = $("#duration");
    var $age = $("#age");

    $("#search").on('click', getPrograms);

    //This function will obtain the programs collection from the server
    function getPrograms(){
        console.log("before");
        console.log($cost.val());
        console.log($county.val());
        console.log($duration.val());
        console.log($age.val());
        var options = {
            method: "GET",
            url: "/api/programs",
            dataType: "json"
        };

        $.ajax(options)
         .done(function(data){
            console.log(data[0]);
            $test.html(data[0].programName);
            programList = data;
        })
         .error(function(err){
            console.log(err);
        });
    }
});
