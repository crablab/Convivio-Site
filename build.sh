#!/bin/bash
source /var/lib/jenkins/.rvm/scripts/rvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
rvm use 2.2.1
nvm use
bundle install
npm install
gulp build
gulp critical
gulp build


