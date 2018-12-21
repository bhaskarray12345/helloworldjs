angular.module('myApp', [])
//Note that my-photos is a parent of my-photo directive.
.directive('myPhotos', 
function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    
    //Note that controller is inside a directive.
    controller: function($scope) {
      var photos = $scope.photos = []; 
      
      $scope.select = function(photo) {
        angular.forEach(photos, function(photo) {
          photo.selected = false;
        });
        photo.selected = true;
      };
      this.addPhoto = function(photo) {
        photos.push(photo);
      };
    },
    templateUrl: 'my_photos.html'
  };
})
.directive('myPhoto', function() {
  return {
    //^ means to locate the required controller by searching the element and its
    //parents.
    require: '^myPhotos',
    restrict: 'E',
    transclude: true,
    scope: { title: '@'},
    link: function(scope, elem, attrs, photosControl) {
      photosControl.addPhoto(scope);
    },
    template: '<div ng-show="selected" ng-transclude></div>'
  };
});