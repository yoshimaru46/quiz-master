# frozen_string_literal: true

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'active_model_serializers'
gem 'numbers_and_words'
gem 'puma', '~> 3.7'
gem 'rack-cors'
gem 'rails', '~> 5.1.6'
gem 'sqlite3'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'faker'
  gem 'pry-byebug'
  gem 'pry-rails'
end

group :development do
  gem 'annotate'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'foreman'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'overcommit'
  gem 'rubocop', require: false
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'database_cleaner'
  gem 'factory_bot_rails'
  gem 'rspec-parameterized'
  gem 'rspec-rails'
  gem 'rspec-request_describer'
  gem 'shoulda-matchers', '~> 3.1'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
