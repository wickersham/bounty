angular.module("ngPrograms", []);

angular.module("ngPrograms")
        .controller("ProgramController", function($scope, $http){
          $scope.programData = {};

          $scope.createProgram = function(){
            $http.post("/api/programs", $scope.programData)
              .then(function(response){
                console.log(response);
                $scope.programData = {};
              });
          };
        });
