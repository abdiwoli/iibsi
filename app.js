(
  function(){
    angular.module("firstApp",[])
    .controller("main", main)
    .filter('strToltr',StrToltrFilter);
    main.$inject = ["$scope","strToltrFilter"];
    function main($scope, strToltrFilter){
      $scope.name ="abdiwoli";
      $scope.age =33;
      $scope.apps = {
        names: 'abdi',
        ages:66
      };
    }
    function StrToltrFilter(){
      return function(input){
        if(input == 66){
          return "sixty six";
        }
        return input;
      }
    }
  }
)();
