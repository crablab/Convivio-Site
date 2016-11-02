#!/bin/bash
source /var/lib/jenkins/.rvm/scripts/rvm
rvm use
nvm use
bundle install
npm install
gulp build
