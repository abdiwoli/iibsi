(
  function(){
    angular.module("products",[])
    .controller("productController", function($scope,$location){
      name = new URLSearchParams(window.location.search).get("name");

      names ={
        "land": "dhul iiba",
        "home": "guryo iiba",
        "food": "raashin ama cunto iiba",
        "computers":" qalabka electroniga",
        "sofa": "qalabka guriga"
      }
      $scope.name = names[name];

    })

  }
)();
