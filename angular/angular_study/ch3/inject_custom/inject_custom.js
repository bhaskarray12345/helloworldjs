//Sep 21, 2018  Demonstration of 2 controllers.
//              Assigning a value to a variable and
//              injecting into controller.
//              Demonstration of a variable scope is 
//              in the namespace of each controller.
//              Note there are 2 modules and 2 controllers.
var myMod = angular.module('myMod', []); 

//var myMod = angular.module('myApp', []);  This line does not work!!
myMod.value('modMsg', 'Hello from My First Module and First Controller'); //Assigns a string to a variable called modMsg.
//Injects appsMsg to controller
myMod.controller('controllerB', ['$scope', 'modMsg', 
function($scope, msg) 
{
  $scope.message = msg;
}]);


var myApp = angular.module('myApp', ['myMod']);

myApp.value('appMsg', 'Hello from My Second Module and Second Controller'); //Assigns a string to a variable called appMsg.
//Injects appsMsg to controller
myApp.controller('controllerA', ['$scope', 'appMsg', 
function($scope, msg) 
{
  $scope.message = msg;
}]);

console.log(myApp.requires);