require 'rails_helper'

RSpec.describe CastAndCrewController, type: :controller do

  let(:cast_member) { create(:cast_member) }
  let(:crew_member) { create(:crew_member) }
  let(:movie) { create(:movie) }

  describe "GET #index" do
    it "returns http success" do
      get :index, format: :json, movie_id: movie.id
      expect(response).to have_http_status(:success)
    end

    it "get cast and crew array" do
      # get cast and crew and check to see that there is a cast and crew prop
      # m1 = create(:cast_and_crew, title: "Bad Boys")
      # m2 = create(:movie, title: "Boys on the side")
      # m3 = create(:movie, title: "Elf")
      # get :index, format: :json, q: {title_cont: "boys"}

      expect(response).to have_http_status(:success)
      #expect(JSON.parse(response.body).cast).to eq(2)
      #expect(JSON.parse(response.body).crew).to eq(2)
    end
  end

 
end
