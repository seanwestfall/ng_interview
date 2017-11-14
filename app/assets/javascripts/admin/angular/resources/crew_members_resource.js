(function () {
  'use strict';
  angular.module('app').factory('crewMembersService', function($resource, $cacheFactory) {
    return {
      resource: $resource('/movies/:movie_id/crew_members.json'),
      cache: $cacheFactory('crewMembers') 
    } // return
  });
})();
