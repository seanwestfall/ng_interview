(function () {
  'use strict';
  angular.module('app').factory('castAndCrewService', function($resource) {
    return $resource('/movies/:movie_id/cast_and_crew.json')
  });
})();
