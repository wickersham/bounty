//This is for programs

module.exports = {
    getPrograms: getPrograms,
    getProgramsById: getProgramsById,
    getProgramsByTime: getProgramsByTime,
    // to be implimented
    // getProgramsByCounty: getProgramsByCounty,
    // getProgramsByCost: getProgramsByCost,
<<<<<<< HEAD
=======
    getProgramsByTime: getProgramsByTime,
>>>>>>> a34789b52f340596fe9c8d106418c4f5dc2c2485
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
