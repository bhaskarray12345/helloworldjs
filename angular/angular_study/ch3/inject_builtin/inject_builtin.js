//Sep 21, 2018
//Uses alert() method from namespace of window.
//Utilizes built in scope object.
//Note that controller parameter has an array brackets.
//function() is the third element of the array.
//It looks like $window is a keyword.
var myMod = angular.module('myApp', []);

myMod.controller('controllerA', ['$scope', '$window', 
                                 function($scope, $window) {
  $scope.message = "My Module Has Loaded!";
  $window.alert($scope.message);    //Displays an alert message.
}]);