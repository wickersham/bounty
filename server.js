var express = require("express");
var server = express();

//setting up the port
var port = process.env.PORT || 8080;

server.use(express.static(__dirname+"/public"));

//client routes
server.get("/", function(req, res) {
    res.sendFile("public/index.html");
});

server.get("", function(req, res){
    User.find({}, function(err, response){
        if(err)console.log(err);
        res.json();
    });
});

server.listen(port, function() {
    console.log("now listening on port " + port)
})