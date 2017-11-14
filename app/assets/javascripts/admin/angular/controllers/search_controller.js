(function() {
  'use strict';

  angular.module('app').controller('searchCtrl', function($scope, $resource, searchService, movieService) {
    var search = this;

    search.result_length = 0;

    search.query = function() {
      searchService.query({searchTerm: search.input}, function(results) {
        search.results = results
        search.result_length = search.results.length;
      });
      if(search.input == "") {
        search.result_length = 0;
       search.results = null;
      }
    } 

    search.selectMovie = function(movie) {
      movieService.setMovie(
        movie.id,
        movie.tmdb_id,
        movie.title,
        movie.poster_path,
        movie.overview,
        movie.cast,
        movie.crew,
        movie.release_date,

        movie.top_cast_1,
        movie.top_cast_2,
        movie.top_cast_3,
        movie.featured_crew_1,
        movie.featured_crew_2,
        movie.featured_crew_3
      );
    }

    search.closeBtn = false;
    search.openSlider = function() {
      if (angular.element(window).width()<=767) {
      	search.closeBtn = !search.closeBtn;
	if(search.closeBtn) {
		angular.element('.menu').css('right', '-1px');
	} else {
		angular.element('.menu').css('right', '-215px');
	}
      }
    }

  });
})();
