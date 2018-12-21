angular.module('myApp', [])
.controller('myController', function ($scope) {
  
  $scope.mColors = ['red', 'green', 'blue'];
  $scope.myColor = '';
  $scope.hits = 0;
  $scope.misses = 0;
  $scope.changes = 0;
  $scope.myObj = {color: '', hits: '', misses: ''};
  
  //Sets the color.
  $scope.setColor = function (color){
    $scope.myColor = color;
  };
  
  //Whenever 'Hits' is clicked, this is triggered.
  $scope.hit = function (){
    $scope.hits += 1;
  };
  
  //Whenever 'Miss' is clicked, this is triggered.
  $scope.miss = function (){
    $scope.misses += 1;
  };
  
  //This function is triggered when myColor variable is modified.
  //Note that this modifies myObj which in turn triggers myCollection.
  $scope.$watch('myColor', function (newValue, oldValue){
    $scope.myObj.color = newValue;
  });
  
  //This gets triggered when 'hits' or 'misses' variables get modified.
  //Note that this modifies myObj which in turn triggers myCollection.
  $scope.$watchGroup(['hits', 'misses'], function (newValue, oldValue){
    $scope.myObj.hits = newValue[0];
    $scope.myObj.misses = newValue[1];
  });
  
  //Keeps track of all changes: +,-,or any color changes.
  //Whenever myObj changes, this is triggered.
  $scope.$watchCollection('myObj', function (newValue, oldValue){
    $scope.changes += 1;
  });
});