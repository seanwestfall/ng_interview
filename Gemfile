source 'https://rubygems.org'
ruby '3.2.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '7.0.5'
gem 'sass-rails', '~> 6.0'
gem 'uglifier', '4.2'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.11.5'
gem 'sdoc', '~> 2.6.1', group: :doc
gem 'rdoc', '~> 6.5'
gem 'rest-client'

gem 'bootstrap'
# gem 'rails-assets-tether', '>= 1.3.3'
gem 'rails-assets-tether', '>= 1.1.1'
gem 'font-awesome-rails'

gem 'ransack'
gem 'will_paginate', '~> 4.0'
gem 'autoprefixer-rails', '~> 10.4.13.0'
gem 'ffi', '~> 1.15.5'
gem 'i18n', '~> 1.14.1'
gem 'json', '~> 2.6.3'
gem 'loofah', '~> 2.21.3'
gem 'rack', '~> 2.2.7' # locked at 2.0.3, though latest is 2.0.4
gem 'tzinfo', '~> 2.0.6'
gem 'unf_ext', '~> 0.0.8.2'
gem 'websocket-driver', '~> 0.7.5' # locked at 0.6.5, though latest is 0.7.0

source 'https://rails-assets.org' do
  gem 'rails-assets-angular'
  gem 'rails-assets-angular-resource'
  group :development, :test do
    gem 'rails-assets-angular-mocks'
  end
end

group :development, :test do
  gem 'byebug'
  gem 'rspec-rails', '~> 6.0.3'
  gem 'factory_bot_rails'
end

group :development do
  gem 'web-console', '~> 4.2.0'
  gem 'spring'
  gem 'sqlite3'
end

group :production do
  # https://github.com/rails/rails/issues/31673
  gem 'pg', '~> 1.5.3'
  gem 'rails_12factor'
  gem 'puma', '~> 6.3.0'
end

