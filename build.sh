#!/bin/bash
source /var/lib/jenkins/.rvm/scripts/rvm
rvm use 2.2.1
nvm use
bundle install
npm install
gulp build
