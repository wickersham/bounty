/*
  These are utility functions that are going to be used to filter frontend data.
*/


/*
  This function takes a collection of objects then filters those based on location.
  @param programs --> the colleciton of objects to be filtered
  @param location --> the location to filter the objects by
  @return a collection of objects that are located at the specified location
*/
function filterByLocation(programs,location){
  var programsByLocation = _.filter(programs, function(program){
      return program.location === location;
  });

  return programsByLocation;
}

/*
  @param cost --> the cost to filter objects by
*/
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

//filter by time of day
function filterByTimeOfDay(programs, timeOfDay){
  var programsByTimeOfDay = _.filter(programs, function(program) {
    return program.timeOfDay === timeOfDay;
  });
  return programsByTimeOfDay;
}


//@params age --> filter by age
// function filterByAge(programs, age){
//   var programsByAge - _.filter(programs, function(program) {
//     return program.age === age;
//   });
//   return programsByAge;
// }
