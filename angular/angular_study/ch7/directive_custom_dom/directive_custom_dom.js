angular.module('myApp', [])
.controller('myController', function($scope) {
    $scope.title="myApplication";
  })
.directive('mybox', 
function() {

  return  {
    
    //transclude is a fancy word for include into multiple places
    transclude: true,   
    
    //E stands for Element.  THere are A for Attribute,
    //C for class, M for comment.
    restrict: 'E',
    
    //Weird syntax. Values are coming from html.
    //NOte that the arguments are coming from html code.
    //<mybox title="Simple Text" bwidth="100px">
    //Q:I don't get why title is '@'?
    scope: {title: '@', bwidth: '@bwidth'}, 
    
    //Injecting a template
    //This is where class is defined.
    //Obviously, it needs to be coordinated with CSS.
    template: '<div><span class="titleBar">{{title}}' + 
              '</span><div ng-transclude></div></div>',
              
    //Appending footer
    link: function (scope, elem, attr, controller, transclude){
      //Note that it is not scope.title, but scope.$parent.title.
      //In terms of DOM, controller is at parent level.
        elem.append('<span class="footer">' + scope.$parent.title + '</span>');
        elem.css('border', '2px ridge black');
        //Q:Does this overrides CSS set up as display:block?
        elem.css('display', 'inline-block');
        elem.css('width', scope.bwidth);
      },
    };
  });