// Handlebars template for the programs list viewpage. Do Not Touch!

var response = [
      {
        name: "me"
      },
      {
        name: "you"
      }
    ];

$.handlebars({
    templatePath: 'templates'
});

// var source   = $("#test").html();
// var template = Handlebars.compile(source);

// now this will fetch <path/to/templates/content.hbs>
$('#viewpage').render('viewpage', {
    employer: 'Hello',
    field2: 'world!',
    programs: 'response'
});
