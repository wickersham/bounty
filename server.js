var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Program = require("./models/Program");

mongoose.connect("mongodb://localhost/programDatabase");

//setting up the port
var port = process.env.PORT || 8080;

server.use(express.static(__dirname+"/public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//client routes
server.get("/", function(req, res) {
    res.sendFile("public/index.html");
});

server.get("/submit", function(req, res) {
  res.sendFile(__dirname+"/public/pages/forms.html");
});

server.get("/list", function(req, res) {
  res.sendFile(__dirname+"/public/pages/publicView.html");
});

server.get("/api/programs", function(req, res){
    Program.find({}, function(err, response){
        if(err)console.log(err);
        res.json(response);
    });
});

server.get("/api/programs/id/:id", function(req, res){
  Program.findOne({_id: req.params.id}, function(err, programs) {
    if(err) {
      console.log(err);
    }
    res.send(programs);
  });
});

server.get("/api/programs/time/:timeline", function(req, res){
  Program.find({"timeline": req.params.timeline}, function(err, programs) {
    if(err) {
      console.log(err);
    }
    res.send(programs);
  });
});

// server.get("/api/programs/", function(req, res){
//   Program.find({}, function(err, programs) {
//     if(err) {
//       console.log(err);
//     }
//     res.send(programs);
//   });
// });

server.post("/api/programs", function(req, res){
    console.log(req.body);
    var program = new Program({
      programName:      req.body.programName,
      minCost:          req.body.minCost,
      maxCost:          req.body.maxCost,
      certificate:      req.body.certificate,
      timeline:         req.body.timeline,
      meals:            req.body.meals,
      affiliation:      req.body.affiliation,
      otherBenefits:    req.body.otherBenefits,
      ageMin:           req.body.ageMin,
      ageMax:           req.body.ageMax,
      pastSuccess:      req.body.pastSuccess,
      pastParticipants: req.body.pastParticipants,
      wordOut:          req.body.wordOut,
      funded:           req.body.funded,
      impediments:      req.body.impediments,
      numParticipants:  req.body.numParticipants,
      description:      req.body.description,
      programUrl:       req.body.programUrl,
      location:         req.body.location,
      otherComments:    req.body.otherComments,
      partners:         req.body.partners,
      scholarships:     req.body.scholarships,
      parentsInvolved:  req.body.parentsInvolved,
      measureSuccess:   req.body.measureSuccess,
      NCFLFunded:       req.body.NCFLFunded,
      bringDayOne:      req.body.bringDayOne,
      inPerson:         req.body.inPerson
    });

      program.save(function(err){
        if (err){
          console.log(err);
        }
          res.json(program);
      });
});

server.listen(port, function() {
    console.log("now listening on port " + port);
});

module.exports = server;
