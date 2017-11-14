require 'pp'
require 'rails_helper'

RSpec.describe CrewMembersController, type: :controller do
  render_views

  let(:movie) { create(:movie) }

  describe "GET #index" do
    it "returns http success" do
      get :index, format: :json, movie_id: movie.id
      expect(response).to have_http_status(:success)
    end

    it "get crew" do
      # get crew

      get :index, format: :json, movie_id: movie.id
      expect(response).to have_http_status(:success)
      # see spec/factories/movies.rb line 9 to see why this is 3
      expect(JSON.parse(response.body).size).to eq(3)
    end
  end

 
end
