var express = require("express");
var server = express();

//setting up the port
var port = process.env.PORT || 8080;

server.use(express.static(__dirname+"/public"));

//client routes
server.get("/", function(req, res) {
    res.sendFile("public/index.html");
});

server.listen(port, function() {
    console.log("now listening on port " + port)
})