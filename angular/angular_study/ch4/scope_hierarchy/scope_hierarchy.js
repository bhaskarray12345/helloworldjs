//Sep 21, 2018 - Demonstration of controller higherarchy.
//               Note that controller is defined in the order
//               of hierarchy.
//               The variables from the higher hierarchies are
//               visible by the lower controllers.
//               Also notice that inc() function name is identical
//               in all controllers.  When a button is clicked, it knows
//               how to get to the right controller.

angular.module('myApp', []).
  controller('LevelA', function($scope) {
    $scope.title = "Level A"
    $scope.valueA = 1;
    $scope.inc = function() {
      $scope.valueA++;
    };
  }).
  controller('LevelB', function($scope) {
    $scope.title = "Level B"
    $scope.valueB = 1;
    $scope.inc = function() {
      $scope.valueB++;
    };
  }).
  controller('LevelC', function($scope) {
    $scope.title = "Level C"
    $scope.valueC = 1;
    $scope.inc = function() {
      $scope.valueC++;
    };
  });