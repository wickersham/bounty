


$(document).ready(function(){
  $.handlebars({
      templatePath: 'templates'
  });

    var programList = [];
    //These are references to the select drop down boxes for search functionality

    $("#viewpage").on("click", "button", function(){
      $(this).siblings(".more-info").fadeIn();
    });
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
