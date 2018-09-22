//Sep 21, 2018 Demonstration of provider to provide new values to controller.
var myModule = angular.module('myApp', []);

myModule.config(function($provide) { 
    $provide.value("configTime", new Date()); //Sets time to configTime
    $provide.value("runTime", new Date());//Sets time to runTime
    //Runs 1billion sqrt and log
    for(var x=0; x<1000000000; x++){
      var y = Math.sqrt(Math.log(x));
    }  
});

//Sets new time to runTime.
//Q:I am not sure who calls this function?
//The difference between configTime and runTime is the 
//billion sqrt and log calculation in a looop.
myModule.run(function(configTime, runTime) {    
  runTime.setTime((new Date()).getTime());
});

//Injects configTime and runTime.
myModule.controller('controllerA',['$scope', 'configTime', 'runTime',
    function($scope, configTime, runTime){
  $scope.configTime = configTime;
  $scope.runTime = runTime;
}]);
