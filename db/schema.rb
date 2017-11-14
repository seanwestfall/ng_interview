# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160809002955) do

  create_table "cast_members", force: :cascade do |t|
    t.string   "character"
    t.integer  "movie_id",     null: false
    t.integer  "tmdb_id",      null: false
    t.string   "name",         null: false
    t.string   "profile_path"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "crew_members", force: :cascade do |t|
    t.string   "department"
    t.integer  "movie_id",     null: false
    t.integer  "tmdb_id",      null: false
    t.string   "name",         null: false
    t.string   "job"
    t.string   "profile_path"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string   "title",        null: false
    t.string   "poster_path",  null: false
    t.string   "overview",     null: false
    t.integer  "tmdb_id",      null: false
    t.datetime "release_date", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "top_cast_1"
    t.integer  "top_cast_2"
    t.integer  "top_cast_3"
    t.integer  "featured_crew_1"
    t.integer  "featured_crew_2"
    t.integer  "featured_crew_3"
  end

  create_table "people", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
