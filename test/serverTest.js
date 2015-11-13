var assert = require("chai").assert;
var http   = require("http");
var server = require("../server.js");

it("should return a 200 response", function (done) {

    http.get("http://localhost:8080", function (res) {
        assert.equal(res.statusCode, 200);
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
