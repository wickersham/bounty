//This is for programs

module.exports = {
    getPrograms: getPrograms,
    getProgramsById: getProgramsById,
    getProgramsByTime: getProgramsByTime,
    // to be implimented
    // getProgramsByCounty: getProgramsByCounty,
    // getProgramsByCost: getProgramsByCost,
};

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

// old mysql function kept for reference/fun

// function getProgramsByCounty(req, res){
//   //programs/county/:county
//     var county = req.body.county;
//     connection.query("SELECT * FROM programs where county = '"+connection.escape(id)+"'", function(err, rows, fields){
//         if(err){ console.error(err); return;}
//         res.json(rows);
//
//     });
// };
