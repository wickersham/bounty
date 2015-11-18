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
