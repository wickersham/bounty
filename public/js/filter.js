/*
  These are utility functions that are going to be used to filter frontend data.
*/


/*
  This function takes a collection of objects then filters those based on location.
  @param programs --> the colleciton of objects to be filtered
  @param location --> the location to filter the objects by
  @return a collection of objects that are located at the specified location
*/
function filterByLocation(programs,county){
  var programsByLocation = _.filter(programs, function(program){
      return program.county === county;
  });

  return programsByLocation;
}



//@param cost --> the cost to filter objects by
function filterByCost(programs, cost){
  var programsByCost = _.filter(programs, function(program) {
    return program.cost === cost;
  });
  return programsByCost;
}

//@params timeline --> filter by length of time of the program
function filterByTimeLength(programs, timeline){
  var programsByTimeLength = _.filter(programs, function(program) {
    return program.timeline === timeline;
  });
  return programsByTimeLength;
}

//@marams timeOfDay --> filter by time of day
function filterByTimeOfDay(programs, timeOfDay){
  var programsByTimeOfDay = _.filter(programs, function(program) {
    return program.timeOfDay === timeOfDay;
  });
  return programsByTimeOfDay;
}


//@params age --> filter by age lower and upper
function filterByAgeMin(programs, ageMin){
  var programsByAgeMin = _.filter(programs, function(program) {
    return program.ageMin >= ageMin;
  });
  return programsByAgeMin;
}

function filterByAgeMax(programs, ageMax){
  var programsByAgeMax = _.filter(programs, function(program) {
    return program.ageMax <= ageMax;
  });
  return programsByAgeMax;
}

/*
  This is the overall filter function
*/
function filterPrograms(programs, location, cost, duration, age){
    var filteredPrograms = programs;
    if (location && cost && duration && age){ //each field has constraints on l c d and a
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    } else if (location && cost && duration && !age){  //dont filter age (allow all age object properties)
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
    } else if (location && cost && !duration && age) {  //dont filter duration
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByAgeMin (filteredPrograms, age);
    } else if (location && !cost && duration && age) { //dont filter cost
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    } else if (!location && cost && duration && age) { //dont filter location
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    }

     else if (!location && !cost && !duration && !age) { //returns errything
        filteredPrograms = programs;
    } else if (location && !cost && !duration && !age){
        filteredPrograms = filterByLocation(programs, location);
    }


    return filteredPrograms;
}
