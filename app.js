(function(){
  angular.module("firstApp",[])
  .controller('main',Main);
  Main.$inject = ['$scope','$timeout'];
  function Main($scope,$timeout){
    $scope.counter =0;
    $scope.upCounter = function(){
      $timeout(function(){
        $scope.counter++;
      },2000);
    }
  }
})();
