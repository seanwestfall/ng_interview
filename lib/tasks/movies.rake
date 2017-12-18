namespace :movies do
  task pull: :environment do
    headers = {
      :accept => 'application/json'
    }

    pages = (1..25).to_a
    base_movie_url = 'http://api.themoviedb.org/3/movie/popular?api_key=03c0c493651961ae410bb4a44efaf098&page='
    base_cast_url = 'http://api.themoviedb.org/3/movie/'
    api_key_param = '?api_key=03c0c493651961ae410bb4a44efaf098'

    pages.each do |page|
      url = base_movie_url + page.to_s
      response = JSON.parse(RestClient.get url, headers)
      response = response['results']
      row_counter = 0;

      response.each do |from_api|
        puts "Row counter for Heroku: #{row_counter}"
        break if row_counter >= 10000
        movie = Movie.find_or_initialize_by title: from_api['title']
        movie.poster_path = from_api['poster_path']
        movie.overview = from_api['overview']
        movie.tmdb_id = from_api['id']
        movie.release_date = from_api['release_date']
        movie.save!
        row_counter += 1;
        puts "----------------------------------#{from_api['title']}----------------------------------"
        puts "PULLING CAST: #{from_api['title']}..."

        credits_response = JSON.parse(RestClient.get base_cast_url + from_api['id'].to_s + '/credits' + api_key_param, headers)
        cast_response = credits_response['cast']
        cast_response.each_with_index do |cast, index|
          puts "SAVED: #{cast['name']} as #{cast['character']}"
          cast_member = CastMember.find_or_initialize_by name: cast['name'], movie_id: movie['id']
          cast_member.character = cast['character']
          cast_member.movie_id = movie['id']
          cast_member.tmdb_id = cast['id']
          cast_member.name = cast['name']
          cast_member.profile_path = cast['profile_path']
          cast_member.save!
          row_counter += 1;
          if index == 0 then movie.update_column(:top_cast_1, cast_member.id) end
          if index == 1 then movie.update_column(:top_cast_2, cast_member.id) end
          if index == 2 then movie.update_column(:top_cast_3, cast_member.id) end
        end
        puts '--------------------------------------------------------------------'
        puts "PULLING CREW: #{from_api['title']}..."

        crew_response = credits_response['crew']
        crew_response.each_with_index do |crew, index|
          puts "SAVED: #{crew['name']} as #{crew['job']}"
          crew_member = CrewMember.find_or_initialize_by name: crew['name'], movie_id: movie['id']
          crew_member.department = crew['department']
          crew_member.movie_id = movie['id']
          crew_member.tmdb_id = crew['id']
          crew_member.name = crew['name']
          crew_member.job = crew['job']
          crew_member.profile_path = crew['profile_path']
          crew_member.save!
          row_counter += 1;
          if index == 0 then movie.update_column(:featured_crew_1, crew_member.id) end
          if index == 1 then movie.update_column(:featured_crew_2, crew_member.id) end
          if index == 2 then movie.update_column(:featured_crew_3, crew_member.id) end
        end
      end
    end
  end
end
