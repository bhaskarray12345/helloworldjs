//Sep 25, 18
//Note that broadcast() is used when a call is made from parent controller
//emit() is used when a call is made from child controller.

angular.module('myApp', []).

  controller('Characters', function($scope) {
    
    $scope.names = ['Frodo', 'Aragorn', 'Legolas', 'Gimli'];
    $scope.currentName = $scope.names[0];
    
    //When one of the characters were pressed
    //the detail info of this character is displayed immediately.
    //The calling of CharacterChanged function is is done broadcast angular method.
    $scope.changeName = function() {
      $scope.currentName = this.name;
      $scope.$broadcast('CharacterChanged', this.name);
    };
    
    //This function is invoked from child controller.
    $scope.$on('CharacterDeleted', function(event, removeName){
      //Get the index of the button which needs to be removed.
      var i = $scope.names.indexOf(removeName);
      //Remove that button only.
      $scope.names.splice(i, 1);
      //Current name now belongs to the very top. 
      $scope.currentName = $scope.names[0];
      //Need to broadcast that the current character has changed. 
      $scope.$broadcast('CharacterChanged', $scope.currentName);
    });
  }).
  controller('Character', function($scope) {
    $scope.info = {
                    'Frodo': { 
                              weapon: 'Sting', 
                              race: 'Hobbit'
                            },
                   'Aragorn': { 
                                weapon: 'Sword', 
                                race: 'Man'
                              },
                   'Legolas': { 
                                weapon: 'Bow', 
                                race: 'Elf'
                              },
                   'Gimli': { 
                              weapon: 'Axe', 
                              race: 'Dwarf'
                            }
                  };
    $scope.currentInfo = $scope.info['Frodo']; 
    
    //This function is invoked by changeName() function.
    //Changes the display of detailed info of a character.
    //Note that $scope.$on means that this is always ready to receive a call from
    //outside.
    $scope.$on('CharacterChanged', function(event, newCharacter){
      $scope.currentInfo = $scope.info[newCharacter];
    }); 
    
    //This function is called when delete button is pressed.
    //It calls the function that belongs to higher controller.
    $scope.deleteChar = function() {
      delete $scope.info[$scope.currentName];
      $scope.$emit('CharacterDeleted', $scope.currentName);
    };
  });