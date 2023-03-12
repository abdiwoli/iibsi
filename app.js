(function(){
  angular.module("iibsi",[])
  .controller('main',Main);
  Main.$inject = ['$scope','$timeout'];
  function Main($scope,$timeout){
    var images = [
      "/pics/home.jfif", "/pics/land.jfif", "/pics/computers.jfif", "/pics/sofa.jfif", "/pics/food.jfif"];
    var titles = [
      "Buy new Home", "invest in land", "buy new Computer", "refresh your home","home delevery"];
    $scope.count = 1;
    $scope.title = titles[$scope.count];
    $scope.img = images[$scope.count];
    $scope.product = "";

     var timer= $timeout(function interval(){
       $scope.count = $scope.count%(images.length)+1;
       $scope.title = titles[$scope.count-1];
       $scope.img = images[$scope.count-1];
      timer = $timeout(interval, 2000);
     },2000)
     $scope.products = function (index){
         $scope.product= images[$scope.count-1];
         $scope.product= $scope.product.split("/")[2].split(".")[0];
         window.location ="/pages/products.html?name="+$scope.product;;

   }


  }
})();
