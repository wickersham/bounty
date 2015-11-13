process.env.NODE_ENV = "test"

//So does mocha play nice with angular, lets find out.
angular.module("ngPrograms", []);

describe("Server-side test", function(){
    it("Returns index.html on get '/'", function(){
        
    });
    
    it("Returns {} on get '/api/programs'", function(){
angular.module("ngGet")
        .controller("GetController", function(){
        $scope.getProgram = function(){
            $http.get("/api/programs")
              .then(function(response){
                  $scope.programs = response.data;
                  console.log($scope.programs);
            });
          };
        });
    });
    
    it("Return a json on post '/api/programs'", function(){
angular.module("ngPost")
        .controller("PostController", function($scope, $http){
          $scope.programData = {};

          $scope.createProgram = function(){
            console.log("Pancakes");
            $http.post("/api/programs", $scope.programData)
              .then(function(response){
                console.log(response);
                $scope.programData = {};
              });
          };
    
    });
});