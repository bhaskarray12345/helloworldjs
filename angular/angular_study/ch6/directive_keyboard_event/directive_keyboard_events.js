angular.module('myApp', []).
  controller('myController', function($scope) {
  
    $scope.storedString = '';
    $scope.keyInfo = {};
    $scope.keyStrokes = [];
    $scope.keyState = 'Not Pressed';
   
    $scope.keyPressed = function(event){
      
      //When carriage return has been entered ...
      if (event.keyCode == 13)
      {
        
        //Obtain the DOM object where the event came from.
        //In this case, that would be text input.
        var element = angular.element(event.target);
        //Store the string from text input to this variable.
        $scope.storedString = element.val();
        
        element.val('');
        
        //Reinitialize all variables.
        $scope.keyInfo.keyCode = event.keyCode;
        $scope.keyStrokes = [];
        $scope.keyState = 'Enter Pressed';
      } 
      else 
      {
        $scope.keyInfo.keyCode = event.keyCode;
        $scope.keyStrokes.push(event.keyCode);
        $scope.keyState = 'Not Pressed';
      }
    };
  });