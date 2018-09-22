angular.module('myApp', []).
  controller('myController', function($scope) {
    //Note that these variables has empty bracelets, meaning it is JSON?
    $scope.mouseInfo = {};
    $scope.lastClickInfo = {};
    
    //Q:Not sure what is the difference between clientX and screenX.
    //Q:How is that event has information on mouse position?
    $scope.mouseClick = function(event){
      $scope.lastClickInfo.clientX = event.clientX;
      $scope.lastClickInfo.clientY = event.clientY;
      $scope.lastClickInfo.screenX = event.screenX;
      $scope.lastClickInfo.screenY = event.screenY;
    };
    
    //Q:Not sure what is the difference between clientX and screenX.
    $scope.mouseMove = function(event){
      $scope.mouseInfo.clientX = event.clientX;
      $scope.mouseInfo.clientY = event.clientY;
      $scope.mouseInfo.screenX = event.screenX;
      $scope.mouseInfo.screenY = event.screenY;
    };
  });