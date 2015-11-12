angular.module("ngPrograms", []);

angular.module("ngPrograms")
        .controller("ProgramController", function($scope, $http){
          $scope.programData = {};

          $scope.createProgram = function(){
            console.log("Pancakes");
            $http.post("/api/programs", $scope.programData)
              .then(function(response){
                console.log(response);
                $scope.programData = {};
              });
          };

          $scope.getProgram = function(){
            $http.get("/api/programs")
              .then(function(response){
                  $scope.programs = response.data;
                  console.log($scope.programs);
            });
          };
        });
