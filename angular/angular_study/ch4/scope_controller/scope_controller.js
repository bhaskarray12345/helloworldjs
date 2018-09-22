//Demonstration of functions within a function.
angular.module('myApp', []).

  value('start', 200).   //Note the importance of dot which represents chain functions.
  controller('Counter', ['$scope', 'start', 

  function($scope, start) 
  {
    $scope.start = start;
    $scope.current = start;
    $scope.difference = 0;
    $scope.change = 1;
    
    $scope.add = function() {
      $scope.current += $scope.change;
      $scope.calcDiff();
    };
    
    $scope.subtract = function() {
      $scope.current -= $scope.change;
      $scope.calcDiff();
    };
    
    $scope.calcDiff = function() {
      $scope.difference = $scope.current - $scope.start;
    };
    
  }]);