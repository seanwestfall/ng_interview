json.cast(@cast) do |cast|
  json.id cast.id
  json.character cast.character
  json.movie_id cast.movie_id
  json.tmdb_id cast.tmdb_id
  json.name cast.name
  json.profile_path cast.profile_path
end

json.crew(@crew) do |crew|
  json.id crew.id
  json.department crew.department
  json.movie_id crew.movie_id
  json.tmdb_id crew.tmdb_id
  json.name crew.name
  json.job crew.job
  json.profile_path crew.profile_path
end
