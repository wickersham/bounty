$(document).ready(function(){
    var programList = [];
    //These are references to the select drop down boxes for search functionality
    var $cost = $("#cost");
    var $location = $("#location");
    var $duration = $("#duration");
    var $age = $("#age");

    $("#search").on('click', getPrograms);

    //This function will obtain the programs collection from the server
    function getPrograms(){
        console.log("before");
      var $cost = $("#cost span")[0].innerText;
      var $location = $("#location span")[0].innerText;
      var $duration = $("#duration span")[0].innerText;
      var $age = $("#age span")[0].innerText;

        var options = {
            method: "GET",
            url: "/api/programs",
            dataType: "json"
        };

        $.ajax(options)
         .done(function(data){
            console.log(data);
            programList = data;
        })
         .error(function(err){
            console.log(err);
        });
    }
});
