(function () {
  'use strict';
  angular.module('app').controller('movieCtrl', function($scope, $window, movieService, castMembersService, crewMembersService, castAndCrewService) {
    var movie = this;
    movie.selectedMovie = movieService;

    // w640 tmdb url
    movie.w640url = 'https://image.tmdb.org/t/p/w342';

    movie.selectedMovie.movieUrl = "";
    var setMovieImgUrl = function() {
      if(movieService.poster) {
        movie.selectedMovie.movieUrl = movie.w640url + movieService.poster;
      }
    } 
    movieService.registerObserverCallback(setMovieImgUrl);
    
    var setReleaseDateSubstring = function() {
      if(movieService.release_date) {
        movie.selectedMovie.substring_release_date = movieService.release_date.substring(0,4);
      }
    }
    movieService.registerObserverCallback(setReleaseDateSubstring);

    var getCastMembers = function() {
      // check cache first
      movie.selectedMovie.cast = [];
      if(angular.isDefined(movieService.top_cast_1)) {
        movie.selectedMovie.cast.push(castMembersService.cache.get(movieService.top_cast_1));
      }
      if(angular.isDefined(movieService.top_cast_2)) {
        movie.selectedMovie.cast.push(castMembersService.cache.get(movieService.top_cast_2));
      }
      if(angular.isDefined(movieService.top_cast_2)) {
        movie.selectedMovie.cast.push(castMembersService.cache.get(movieService.top_cast_3));
      }

      movie.selectedMovie.crew = [];
      if(angular.isDefined(movieService.featured_crew_1)) {
        movie.selectedMovie.crew.push(crewMembersService.cache.get(movieService.featured_crew_1));
      }
      if(angular.isDefined(movieService.featured_crew_2)) {
        movie.selectedMovie.crew.push(crewMembersService.cache.get(movieService.featured_crew_2));
      }
      if(angular.isDefined(movieService.featured_crew_3)) {
        movie.selectedMovie.crew.push(crewMembersService.cache.get(movieService.featured_crew_3));
      }
      castAndCrewService.get({movie_id: movieService.id}, function(data) {
        // cache the latest results
        if(!angular.isDefined(movie.selectedMovie.cast[0]) &&
           !angular.isDefined(movie.selectedMovie.cast[1]) &&
           !angular.isDefined(movie.selectedMovie.cast[2])) {
          movieService.cast = data.cast;
          angular.forEach(data.cast, function(member) {
            castMembersService.cache.put(member.id,member);
          });
        }

        if(!angular.isDefined(movie.selectedMovie.crew[0]) &&
           !angular.isDefined(movie.selectedMovie.crew[1]) &&
           !angular.isDefined(movie.selectedMovie.crew[2])) {
          movieService.crew = data.crew;
          angular.forEach(data.crew, function(member) {
            crewMembersService.cache.put(member.id,member);
          });
        }
      });
    }
    movieService.registerObserverCallback(getCastMembers);

    var resizeEvent = function() {
      // set the size to 100% of the movie controller
      // when window is less than content size and when there is content
      // there needs to be some logic here for the media quires
      if(typeof movieService.id != "undefined") {
        var height = angular.element(window).height();
        angular.element('.movie').css('height','100%');
        if(height<angular.element('.movie')[0].offsetHeight){
          angular.element('.search').css('height',angular.element('.movie')[0].offsetHeight);
        } else {
          angular.element('.movie').css('height','100vh');
          angular.element('.search').css('height','100vh');
        }
      }
    }
    $window.addEventListener("resize", resizeEvent);
  });
})();
