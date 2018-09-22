angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.Math = window.Math;
    $scope.myArr = [1];
    $scope.removedArr = [];
    $scope.maxNum;
    $scope.getMaxDeletedNum = function(){
      $scope.maxNum = Math.max.apply(Math, $scope.removedArr);
      console.log($scope.maxNUm);
      
    }
  });