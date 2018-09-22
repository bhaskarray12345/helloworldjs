//Sep 21, 2018  - Added comments
angular.module('myApp', []).
  controller('SimpleTemplate', function($scope) {
    //Assign the default values.
    $scope.valueA = 5;
    $scope.valueB = 7;
    $scope.valueC = 12;
    
    //Q:How is it that v1,v2 and e get its values?i
    //A:These values are coming straight from HTML call function.
    //Q:e is never used.
    //A:e is an event.  It is sent from HTML.
    //$scope.addValues = function(v1, v2, e) {
    $scope.addValues = function(v1, v2) {
      //var v = angular.$rootScope;  //Note that var v was never used.
                                     //Q:What is the purpose of $rootScope?
      $scope.valueC = v1 + v2;
    };
  });