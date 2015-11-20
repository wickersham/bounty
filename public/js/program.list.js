


$(document).ready(function(){
  $.handlebars({
      templatePath: 'templates'
  });

    var programList = [];
    //These are references to the select drop down boxes for search functionality


    $("#search").on('click', getPrograms);

    //This function will obtain the programs collection from the server
    function getPrograms(){

        var options = {
            method: "GET",
            url: "/api/programs",
            dataType: "json"
        };

        $.ajax(options)
         .done(function(data){
            console.log(data[0]);
            // now this will fetch <path/to/templates/content.hbs>
            $('#viewpage').render('viewpage', {

                programs: data
            });
        })
         .error(function(err){
            console.log(err);
        });
    }
});
