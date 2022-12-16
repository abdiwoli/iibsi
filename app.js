(function(){
  'use strict';
  angular.module("firstApp",[])
  .controller("abdi", abdi)
  .filter('loves', loveFilter);
  abdi.$inject = ["$scope","lovesFilter"];
  function abdi($scope, lovesFilter){
    $scope.state = "hangury";
    $scope.message = function(){
      var msg = "abdiwoli likes fish";

      return $scope.$$watchersCount;
    };
    $scope.c = 0;

    $scope.show = function(){
         $scope.c+=1;
    }
  }
  function loveFilter(){
    return function(input,h){
      input = input || "";
      input = input.replace("likes",h);
      return input;
    };
  }
})();
