require "middleman"
require "middleman-blog"
require "rspec"
require "capybara/rspec"
require 'capybara-webkit'

Capybara.app = Middleman::Application.server.inst do
  set :root, File.expand_path(File.join(File.dirname(__FILE__), '..'))
  set :environment, :development
  set :show_exceptions, false

end

RSpec.configure do |config|
  Capybara.javascript_driver = :webkit
  Capybara.default_wait_time = 5
end
