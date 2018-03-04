angular.module('app').controller("baseCtrl", ['$scope', '$rootScope',
  function ($scope, $rootScope) {
    $scope.displayTitle = false;

    $scope.reset = function(){
      $scope.userInput = "";
      var div = document.getElementById("plot");
      Plotly.purge(div);
      $scope.displayTitle = false;
      $scope.plotTitle = "";
    }

    $scope.plot = function(){      
      if($scope.userInput === "Draw bar chart"){
        $scope.plotTitle = $scope.userInput;
        $scope.displayTitle = true;
        drawBarChart();
      }else{
        window.alert("wrong input");
      }
    }

    var drawBarChart = function(){
      var div = document.getElementById("plot");
      Plotly.plot(div, [{
        x:[1,2,3,4,5],
        y:[1,2,4,8,16],
        type:'bar'
      }]);
    }
}
]);