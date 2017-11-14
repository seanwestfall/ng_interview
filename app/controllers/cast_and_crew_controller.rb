class CastAndCrewController < ApplicationController
  def index
    @movie = Movie.find(params[:movie_id])
    @cast = @movie.cast_members
    @crew = @movie.crew_members
    
    respond_to do |format|
      format.json { render :index }
    end
  end
end

