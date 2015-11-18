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
    contactName: {
                    type: String,
                    required: true
                 },
    email:       {
                    type: String,
                    required: true
                 },
    phoneNumber: {
                    type: String,
                    required: true
                 },
    cost:        {
                    type: String,
                    required: true
                 },
    certificate: {
                    type: String,
                    required: true
                 },
    timeline:    {
                    type: String,
                    required: true
                 },
    timeOfDay:   {
                    type: String,
                    required: true
                 },
    meals:       {
                    type: String,
                    required: true
                 },
    affiliation: {
                    type: String,
                    required: true
                 },
    otherBenefits: {
                    type: String,
                    required: true
                 },
    ageMin:      {  type: Number,
                    min: 0,
                    required: true
                 },
    ageMax:      {
                    type: Number,
                    min: 0,
                    required: true
                 },
    pastSuccess: {
                    type: String,
                    required: true
                 },
    pastParticipants: {
                    type: String,
                    required: true
                 },
    wordOut:     {
                    type: String,
                    required: true
                 },
    funded:      {
                    type: String,
                    required: true
                 },
    impediments: {
                    type: String,
                    required: true
                 },
    avgNumParticip: {
                    type: Number,
                    min: 0
                  },
    description:  {
                    type: String,
                    required: true
                  },
    programUrl:   {
                    type: String,
                    required: true
                  },
    location:     {
                    type: String,
                    required: true
                  },
    partners:     {
                    type: String,
                    required: true
                  },
    servePop:     {
                    type: String,
                    required: true
                  },
    scholarships: {
                    type: String,
                    required: true
                  },
    parentsInvolved: {
                    type: String,
                    required: true
                  },
    measureSuccess: {
                    type: String,
                    required: true
                  },
    NCFLFunded:   {
                    type: String,
                    required: true
                  },
    bringDayOne:  {
                    type: String,
                    required: true
                  },
    inPerson:     {
                    type: String,
                    required: true
                  }
});

var Program = mongoose.model("Program", programSchema);

module.exports = Program;
