//module 'firstApp' must be set in html.
var firstApp = angular.module('firstApp', []);

//controller 'FirstController' must be set in html.
firstApp.controller('FirstController', function($scope) {
  //Default values
  $scope.first = 'Some';
  $scope.last = 'One';
  $scope.heading = 'Message: ';
  
  //Note that, there is no need to set innerHTML like javascript.
  //This automatically binds.
  $scope.updateMessage = function() {
    $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
  };
});