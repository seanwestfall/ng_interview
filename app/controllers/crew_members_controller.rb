class CrewMembersController < ApplicationController
  def index
    @movie = Movie.find(params[:movie_id])
    @crew_members = @movie.crew_members
    
    respond_to do |format|
      format.json { render :index }
    end
  end
end
