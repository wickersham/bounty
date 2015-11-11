var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//user models
var programSchema = new Schema({
    programName: String,
    // minCost: Number,
    // maxCost: Number,
    // certificate: String,
    // timeline: String,
    // meals: String,
    // affiliation: String,
    // otherBenefits: String,
    // ageMin: Number,
    // ageMax: Number,
    // pastSuccess: String,
    // pastParticipants: String,
    // wordOut: String,
    // funded: String,
    // impediments: String,
    // numParticipants: Number,
    // description: String,
    // programUrl: String,
    // location: String,
    // otherComments: String,
    // partners: String,
    // scholarships: String,
    // parentsInvolved: String,
    // measureSuccess: String,
    // NCFLFunded: String,
    // bringDayOne: String,
    // inPerson: String
});

var Program = mongoose.model("Program", programSchema);

module.exports = Program;
