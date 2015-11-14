//This is for programs

module.exports = {
    getPrograms: getPrograms,
    getProgramsById: getProgramsById,
    // getProgramsByCounty: getProgramsByCounty,
    // getProgramsByCost: getProgramsByCost,
    getProgramsByTime: getProgramsByTime,
}

//Named functions for routes

var getPrograms = function() {
    $http.get("/api/programs")
        .then(function(response) {
            programs = response.data;
    });
};

var getProgramsById = function() {
    $http.get("/api/programs/id/:id")
        .then(function(response) {
            programs = response.data;
    });
};

var getProgramsByTime = function() {
    $http.get("/api/programs/time/:timeline")
        .then(function(response) {
            programs = response.data;
    });
};

// function getProgramsByCounty(req, res){
//   //programs/county/:county
//     var county = req.body.county;
//     connection.query("SELECT * FROM programs where county = '"+connection.escape(id)+"'", function(err, rows, fields){
//         if(err){ console.error(err); return;}
//         res.json(rows);
//
//     });
// };
//
// function getProgramsByCost(req, res){
//   //programs/cost/:cost
//   var cost = req.body.cost;
//   connection.query("SELECT * FROM programs where cost = '"+connection.escape(cost)+"'", function(err, rows, fields){
//       if(err){ console.error(err); return;}
//       res.json(rows);
//
//   });
// };
//
// function getProgramsByTime(req, res){
//       //programs/time/:time
//     var time = req.body.time;
//     connection.query("SELECT * FROM programs where time = '"+connection.escape(time)+"'", function(err, rows, fields){
//         if(err){ console.error(err); return;}
//         res.json(rows);
//
//     });
// };
