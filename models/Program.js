var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//user models
var programSchema = new Schema({
    programName: {
                    type: String,
                    required: true
                 },
    county:      {
                    type: String,
                    required: true
                 },
    contactName: String,
    email: String,
    phoneNumber: String,
    cost:        {
                    type: String,
                    required: true
                 },
    certificate: String,
    timeline:    {
                    type: String,
                    required: true
                 },
    timeOfDay: String,
    meals: String,
    affiliation: String,
    otherBenefits: String,
    ageMin:      {  type: Number,
                    min: 0,
                    required: true
                 },
    ageMax:      {
                    type: Number,
                    min: 0,
                    required: true
                 },
    pastSuccess: String,
    pastParticipants: String,
    wordOut: String,
    funded: String,
    impediments: String,
    avgNumParticip: {
                        type: Number,
                        min: 0
                     },
    description:    {
                        type: String,
                        required: true
                    },
    programUrl: String,
    location:       {
                        type: String,
                        required: true
                    },
    partners: String,
    servePop: String,
    scholarships: String,
    parentsInvolved: String,
    measureSuccess: String,
    NCFLFunded: String,
    bringDayOne: String,
    inPerson:       {
                        type: String,
                        required: true
                    }
});

var Program = mongoose.model("Program", programSchema);

module.exports = Program;
