$(document).ready(function(){
    console.log("working!");
    $( "#programForm" ).submit(function( event ){
        console.log("submitted!");
//This will stop the submit funtion from refreshing page, possibly for missing form pieces.
        event.preventDefault();
    });

});