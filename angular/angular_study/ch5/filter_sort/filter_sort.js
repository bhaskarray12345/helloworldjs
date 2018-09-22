angular.module('myApp', [])
  .controller('myController', ['$scope', 'filterFilter', 
  //Q:What is filterFilter?
  //  It looks like a function from Angular.

function($scope, filterFilter) {
  
    //Initialize data in JSON.
    $scope.planes = [
                      {make: 'Boeing', model: '777', capacity: 440},
                      {make: 'Boeing', model: '747', capacity: 700},
                      {make: 'Airbus', model: 'A380', capacity: 850},
                      {make: 'Airbus', model: 'A340', capacity: 420},
                      {make: 'McDonnell Douglas', model: 'DC10', capacity: 380},
                      {make: 'McDonnell Douglas', model: 'MD11', capacity: 410},
                      {make: 'Lockheed', model: 'L1011', capacity: 380}
                    ];
      
    $scope.filteredPlanes = $scope.planes;
    
    //This value will be toggled.
    $scope.reverse = true;
    
    //Current sort column is make column.
    $scope.column = 'make';
    
    //Triggered when a table head column is clicked.
    $scope.setSort = function(column)
    {
      $scope.column = column;
      $scope.reverse = !$scope.reverse;
    };
    
    //Default filter string is empty.
    $scope.filterString = '';
    
    $scope.setFilter = function(value)
    {
      //Sets new filter.
      //The function filterFilter returns all Javascript objects
      //that returns filtered objects.
      
      $scope.filteredPlanes = 
        filterFilter($scope.planes, $scope.filterString);
    };
    
  }]);