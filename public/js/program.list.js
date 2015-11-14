$(document).ready(function(){
    var programList = [];
    var $test = $("#test");

    $("#search").on('click', getPrograms);
    
    
    
    
    
    //This function will obtain the programs collection from the server
    function getPrograms(){
        console.log("before");
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
    
    //
});