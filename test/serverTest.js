var express = require("express");
var app = express();
var assert = require("chai").assert;
var http   = require("http");
var server = require("../server.js");
var request = require("supertest");
// app.post("/api/programs", function(req, res){
//   res.send(200,{"program":"yeah"});
// });


//tests that home route works on the server
it("home page returns a 200 response", function (done) {
    http.get("http://localhost:8080", function (res) {
        assert.equal(res.statusCode, 200);
        if(res.statusCode !== 200) console.log(res.statusCode);
        done();
    });
});

//tests that the submit route works on the server
it("submit page returns a 200 response", function(done){
    http.get("http://localhost:8080/submit", function(res){
        assert.equal(res.statusCode, 200);
        if(res.statusCode !== 200) console.log(res.statusCode);
        done();
    });
});

//tests that the list route works on the server
it("list page returns a 200 response", function(done){
    http.get("http://localhost:8080/list", function(res){
        assert.equal(res.statusCode, 200);
        if(res.statusCode !== 200) console.log(res.statusCode);
        done();
    });
});


it("should return a get request", function(done){
    http.get("http://localhost:8080/api/programs", function(req, res){
      var body = '';
        req.on('data', function (chunk) {
          console.log(body += chunk.toString());
        });
        done();
    });
});


it("should post to database", function(done){
    request(server)
      .post("/api/programs")
      .send({"why":"why me"})
      .expect(200);
      done();

});


// process.env.NODE_ENV = "test"
//
// //So
// describe("Server-side test", function(){
//    it("Returns index.html on get '/'", function(){
//      http.get("http://localhost:8080", function(){
//
//      });
//    });
//
//    it("Returns {} on get '/api/programs'", function(){
//
//    });
//
//    it("Return a json on post '/api/programs'", function(){
//
//    });
// });
