angular.module('myApp', []).
  controller('myController', function($scope) {
    
    //Initialize JSON object.
    $scope.inputData = { input1: '', 
                         input2: '' };
                         
    //When mouse moves to text input2, the JSON value for
    //input2 will be empty.
    $scope.focusGained = function(input)
    {
      $scope.inputData[input] = '';
    };
    
    //Lets say mouse points away from text input1 and
    //the mouse now points at text input2.
    //In this case, on-blur will trigger focuLost().
    //The event.target will be text input1.
    //Whatever value is stored in text input1 will be
    //assigned to inputData[input1] as a JSON.
    $scope.focusLost = function(event, input){
      var element = angular.element(event.target);
      var value = element.val();
      $scope.inputData[input] = value.toUpperCase();
    };
  });