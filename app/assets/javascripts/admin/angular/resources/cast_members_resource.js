(function () {
  'use strict';
  angular.module('app').factory('castMembersService', function($resource, $cacheFactory) {
    return {
      resource: $resource('/movies/:movie_id/cast_members.json'),
      cache: $cacheFactory('castMembers')
    } // return
  });
})();
