(function () {
  'use strict';
  angular.module('app').factory('searchService', function($resource) {
    return $resource('/movies.json?q[title_cont]=:searchTerm');
  });
})();
