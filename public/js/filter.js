/*
  These are utility functions that are going to be used to filter frontend data.
*/


/*
  This function takes a collection of objects then filters those based on county.
  @param programs --> the colleciton of objects to be filtered
  @param county --> the county to filter the objects by
  @return a collection of objects that are located at the specified county
*/
function filterByCounty(programs, county){
  var programsByCounty = _.filter(programs, function(program){
      return program.county === county;
  });

  return programsByCounty;
}



//@param cost --> the cost to filter objects by
function filterByCost(programs, cost){
  var programsByCost = _.filter(programs, function(program) {
    return program.cost <= cost;
  });
  return programsByCost;
}

//@params timeline --> filter by length of time of the program
function filterByTimeLength(programs, timeline){
  var programsByTimeLength = _.filter(programs, function(program) {
    return program.timeline <= timeline;
  });
  return programsByTimeLength;
}

//@params timeOfDay --> filter by time of day
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
  This is the overall filter function. If my dog looked like this function, I'd shave his butt and walk him backwards
*/
function filterPrograms(programs, county, cost, duration, age){
    var filteredPrograms = programs;
        //constraints on all four params (only these countys costs durations and ages)
    if (county && cost && duration && age){
        filteredPrograms = filterByCounty(programs, county);
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    }
        //three filter params (one field doesnt matter)
    else if (county && cost && duration && !age){  //dont filter age (allow all age object properties)
        filteredPrograms = filterByCounty(programs, county);
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
    } else if (county && cost && !duration && age) {  //dont filter duration
        filteredPrograms = filterByCounty(programs, county);
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByAgeMin (filteredPrograms, age);
    } else if (county && !cost && duration && age) { //dont filter cost
        filteredPrograms = filterByCounty(programs, county);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    } else if (!county && cost && duration && age) { //dont filter county
        filteredPrograms = filterByCost(programs, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    }

                  //one filter param
    else if (county && !cost && !duration && !age) { //filter by loc
        filteredPrograms = filterByCounty(programs, county);

    } else if (!county && cost && !duration && !age) { //filter by cost
        filteredPrograms = filterByCost(programs, cost);

    } else if (!county && !cost && duration && !age) { //filter by duration
        filteredPrograms = filterByTimeLength(programs, duration);

    } else if (!county && !cost && !duration && age) { //filter by age
        filteredPrograms = filterByAgeMin(programs, age);
    }

                    //two filter params
    else if (county && cost && !duration && !age) { //filter by county and cost
        filteredPrograms = filterByCounty(programs, county);
        filteredPrograms = filterByCost(filteredPrograms, cost);

    } else if (county && !cost && duration && !age) { //filter by county and duration
        filteredPrograms = filterByCounty(programs, county);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);

    } else if (county && !cost && !duration && age) { //filter by county and age
        filteredPrograms = filterByCounty(programs, county);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);

    } else if (!county && cost && duration && !age) { //filter by cost and duration
        filteredPrograms = filterByCost(programs, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);

    } else if (!county && cost && !duration && age) { //filter by cost and age
        filteredPrograms = filterByCost(programs, cost);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);

    } else if (!county && !cost && duration && age) { //filter by duration and age
        filteredPrograms = filterByTimeLength(programs, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    }

    else if (!county && !cost && !duration && !age) { //returns errything
        filteredPrograms = programs;
    }

    return filteredPrograms;
}
