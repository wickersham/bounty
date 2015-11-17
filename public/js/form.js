$(document).ready(function(){
    console.log("working!");
//Using .submit to handle the form and link the submit button to an action.
    $( "#programForm" ).submit(function( event ){
        console.log("submitted!");
//building object from form.html's inputs
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
        $.post("/api/programs", formObject, function(){
            console.log("POSTING!!");
        })
            .done(function(){
                console.log("success");
            })
//If this works it needs to inheret event.preventDefault()
            .fail(function(){
                console.log("fail");
            });
        event.preventDefault();
    });

});