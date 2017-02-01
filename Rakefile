
require 'mini_magick'
require 'fileutils'
require 'pry'

begin
  require 'jasmine'
  require 'jasmine-phantom'
  load 'jasmine/tasks/jasmine.rake'
  load 'jasmine-phantom/tasks.rake'

  namespace :images do
    def resize_image(target, source)
      image = MiniMagick::Image.open(source)
      image.resize "400x400"
      image.format "jpg"
      image.write target
      puts "Created #{target} ..."
    end

    ORIGINAL_FILES = Rake::FileList["source/avatars/*.{jpg,jpeg,png}", "source/podcast/**/*.{jpg,jpeg,png}"]
    SMALL_IMAGE_FILES = ORIGINAL_FILES.pathmap("%{source,source/images/processed/small}d/%n.jpg")
    LARGE_IMAGE_FILES = ORIGINAL_FILES.pathmap("%{source,source/images/processed/large}d/%n.jpg")

    SMALL_IMAGE_FILES.zip(ORIGINAL_FILES).each do |target, source|
      containing_dir = target.pathmap('%d') # ensure folder exists
      directory containing_dir

      file target => [containing_dir, source] do
        resize_image(target, source)
      end
    end

    LARGE_IMAGE_FILES.zip(ORIGINAL_FILES).each do |target, source|
      containing_dir = target.pathmap('%d') # ensure folder exists
      directory containing_dir

      file target => [containing_dir, source] do
        resize_image(target, source)
      end
    end

    task :process => [*SMALL_IMAGE_FILES, *LARGE_IMAGE_FILES]
  end
rescue LoadError
  task :jasmine do
    abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
  end
end
