$(document).ready(function(){
    console.log("working!");
    $( "#programForm" ).submit(function( event ){
        console.log("submitted!");
        var formObject = {};
        formObject.programName = $( "#programName" ).val();
        formObject.timeline = $( "#timeline" ).val();
        formObject.meals = $( "#meals" ).val();
        formObject.affiliation = $( "#affiliation" ).val();
        formObject.otherBenefits = $( "#otherBenefits" ).val();
        formObject.pastSuccess = $( "#pastSuccess" ).val();
        formObject.wordOut = $( "#wordOut" ).val();
        formObject.funded = $( "#funded" ).val();
        formObject.numParticipants = $( "#numParticipants" ).val();
        formObject.description = $( "#description" ).val();
        formObject.programUrl = $( "#programUrl" ).val();
        formObject.location = $( "#location" ).val();
        formObject.partners = $( "#partners" ).val();
        formObject.scholarships = $( "#scholarships" ).val();
        formObject.parentsInvolved = $( "#parentsInvolved" ).val();
        formObject.measureSuccess = $( "#measureSuccess" ).val();
        formObject.NCFLFunded = $( "#NCFLFunded" ).val();
        formObject.inPerson = $( "#inPerson" ).val();
        console.log(formObject);
//This will stop the submit funtion from refreshing page, possibly for missing form pieces.
        event.preventDefault();
    });

});