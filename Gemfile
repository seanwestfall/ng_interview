source 'https://rubygems.org'
ruby '2.5.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.1.4'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '4.1.6'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 1.0.0', group: :doc
gem 'rdoc', '~> 6.0.1'
gem 'rest-client'

gem 'bootstrap'
gem 'rails-assets-tether', '>= 1.3.3'
gem 'font-awesome-rails'

gem 'ransack', '~> 1.8.7'
gem 'will_paginate', '~> 3.0'
gem 'autoprefixer-rails', '~> 7.2.5' # locked at 7.2.5, though latest is 8.0.0
gem 'ffi', '~> 1.9.18' # locked at 1.9.18, though latest is 1.9.21
gem 'i18n', '~> 0.9.3' # locked at 1.9.3, though latest is 0.9.4
gem 'json', '~> 2.1.0'
gem 'loofah', '~> 2.1.1' # locked at 2.1.1, though latest is 2.2.0
gem 'rack', '~> 2.0.3' # locked at 2.0.3, though latest is 2.0.4
gem 'tzinfo', '~> 1.2.4' # locked at 1.2.4, though latest is 1.2.5
gem 'unf_ext', '~> 0.0.7.4' # locked at 0.0.7.4, though latest is 0.0.7.5
gem 'websocket-driver', '~> 0.6.5' # locked at 0.6.5, though latest is 0.7.0

source 'https://rails-assets.org' do
  gem 'rails-assets-angular'
  gem 'rails-assets-angular-resource'
  group :development, :test do
    gem 'rails-assets-angular-mocks'
  end
end

group :development, :test do
  gem 'byebug'
  gem 'rspec-rails', '~> 3.7.1'
  gem 'factory_bot_rails'
end

group :development do
  gem 'web-console', '~> 3.5.1'
  gem 'spring'
  gem 'sqlite3'
end

group :production do
  # https://github.com/rails/rails/issues/31673
  gem 'pg', '~> 0.21'
  gem 'rails_12factor'
  gem 'puma'
end

