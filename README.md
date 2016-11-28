# The Convivio Site

This project is built using Jekyll and Gulp.

## Dependencies

[NVM](https://github.com/creationix/nvm), [RVM](https://rvm.io/), and [Bundler](http://bundler.io/)

## Installing

In the project root folder, run:
1. `nvm use`
1. `npm install --global gulp-cli`
1. `nvm use`
1. `rvm use`
1. `bundle install`

## Local development

Run `gulp`

It compiles the site to `destination`, starts a local server for that folder, and watches the various files to recompile when modified.

## Deploying to production

To ensure the site is built correctly, run:

1. `gulp build`
2. `gulp deploy`

`gulp deploy` pushes the `destination` folder contents to the `gh-pages` branch.

The build and deploy process is currently a little slow in the name of performance and the [critical rendering path.](https://www.smashingmagazine.com/2015/08/understanding-critical-css/)

## Folder structure

### Top level files

Build related files, you shouldn't have to edit these  files unless you're working on the build process of the site.

### source

Where all the source files are contained, this is where all the content is created.

### destination

The generated output into static HTML.
