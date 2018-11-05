require 'mina/rsync'

set :user, ENV['USER'] || 'cdn'
set :domain, ENV['DOMAIN'] || 'foobar.com'
set :deploy_to, ENV['DEPLOY_TO'] || '/home/cdn'
set :branch, ENV['BRANCH'] || 'master'
set :repository, 'git@github.com:hostinger/banners.git'
set :rsync_options, %w[--recursive --delete --delete-excluded --exclude .git*]
set :rsync_stage, '.'
set :forward_agent, true

desc 'Deploy to server'

task :deploy do
  deploy do
    invoke 'rsync:deploy'
    invoke :'deploy:link_shared_paths'
    invoke :'deploy:cleanup'
  end
end
