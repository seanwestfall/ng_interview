angular.module('app').directive('checkImage', function($http) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
       attrs.$observe('ngSrc', function(ngSrc) {
          $http.get(ngSrc).error(function(){
            element.attr('src', 'assets/blank_img/h343_w240_blank-b10c3033422d58fab6c54944ab8528718a59c7e2d33c4f7aeea67d1b58724025.jpg'); // set default image
          });
       });
     }
  };
});
