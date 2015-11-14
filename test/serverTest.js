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

//tests default GET route, might want to rewrite without console.log?
it("should return a get request", function(done){
    http.get("http://localhost:8080/api/programs", function(req, res){
        var body = '';
        req.on('data', function (chunk) {
          console.log(body += chunk.toString());
        });
        done();
    });
});

//tests post route, this should fail the program schema, but I don't know if it is? new test for schema?
it("should post to database", function(done){
    request(server)
      .post("/api/programs")
      .send({"why":"why me"})
      .expect(200);
      done();

});

//tests get element by id, this test will break when mongod is updated.
it("should get element by id", function(done){
    http.get("http://localhost:8080/api/programs/id/:5643e1fef95f414c11299b01", function(req, res){
        var body = '';
        req.on('data', function(chunk){
            console.log(body += chunk.toString());
        });
        done();
    });
});