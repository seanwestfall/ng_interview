(function () {
  'use strict';
  angular.module('app').factory('movieService', function($resource) {
    return {
      // public properties
      id: null,
      tmdb_id: null,
      title: null,
      poster: null,
      overview: null,
      cast: null,
      crew: null,
      release_date: null,

      top_cast_1: null,
      top_cast_2: null,
      top_cast_3: null,
      featured_crew_1: null,
      featured_crew_2: null,
      featured_crew_3: null,

      // setter/constructor
      setMovie: function(id, tmdb_id, title, poster, overview, cast, crew, release_date, top_cast_1, top_cast_2, top_cast_3, featured_crew_1, featured_crew_2, featured_crew_3) {
        this.id = id;
        this.tmdb_id = tmdb_id;
        this.title = title;
        this.poster = poster;
        this.overview = overview;
        this.cast = cast;
        this.crew = crew;
        this.release_date = release_date;

        this.top_cast_1 = top_cast_1;
        this.top_cast_2 = top_cast_2;
        this.top_cast_3 = top_cast_3;
        this.featured_crew_1 = featured_crew_1;
        this.featured_crew_2 = featured_crew_2;
        this.featured_crew_3 = featured_crew_3;

        this.notifyObservers();
      },
      // getter
      getMovie: function() {
        return {
          id: this.id,
          tmdb_id: this.tmdb_id,
          title: this.title,
          poster: this.poster,
          overview: this.overview,
          cast: this.cast,
          release_date: this.release_date, 

          top_cast_1: this.top_cast_1,
          top_cast_2: this.top_cast_2,
          top_cast_3: this.top_cast_3,
          featured_crew_1: this.featured_crew_1,
          featured_crew_2: this.featured_crew_2,
          featured_crew_3: this.featured_crew_3
        }
      },

      // internal functions
      observerCallbacks: [],
      registerObserverCallback: function(callback){
        var index = this.observerCallbacks.indexOf(callback);
        if (index < 0) {
          this.observerCallbacks.push(callback);
        }
      },
      notifyObservers: function() {
        angular.forEach(this.observerCallbacks, function(callback){
          callback();
        });
      }
    }; // factory return
  }); // movieService declaration
})();
