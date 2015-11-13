var assert = require("chai").assert;
var http   = require("http");
var server = require("../server.js");

it("should return a 200 response", function (done) {

   http.get("http://localhost:8080", function (res) {
       assert.equal(res.statusCode, 200);
       done();
   });
});