'use strict';

require('harmonize')();
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
// var imagemin = require('gulp-imagemin');

var sourceDir = './source/';
var buildDir = './destination'
var sassDir = './source/_sass/**/*.scss';
var cssDir = './destination/css';
var jsDir = './source/js/*';
var jsSrc = './source/js/index.js';
var jsDest = './destination/js';
var imgSrc = './source/images/**/*';
var imgDest = './destination/images';

gulp.task('sass', function () {
  return gulp.src(sassDir)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(cssDir))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  gulp.src(jsSrc)
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    // .pipe(uglify())
    .pipe(gulp.dest(jsDest));
    browserSync.reload();
});

gulp.task('images', function() {
  gulp.src(imgSrc)
    // .pipe(imagemin())
    .pipe(gulp.dest(imgDest))
    browserSync.reload();
});

gulp.task('watch', function() {
  gulp
    // Run run `sass` task when sass files change
    .watch(sassDir, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp
    // Run run `scripts` task when js files change
    .watch(jsDir, ['scripts'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp
    // Run run `scripts` task when js files change
    .watch(imgSrc, ['images'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp.watch(['source/**/*.md', 'source/**/*.html', 'source/**/*.xml', 'source/**/*.txt'], ['jekyll-rebuild']);

});

// BrowserSync will serve our site on a local server for us and other devices to use
// It will also autoreload across all devices as well as keep the viewport synchronized
// between them.
gulp.task('serve', function () {
  browserSync.init({
    notify: true,
    server: {
      baseDir: buildDir
    }
  });
});

gulp.task('jekyll-build', shell.task('bundle exec jekyll build --config jekyllconfig.yml'));
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

gulp.task('build', ['jekyll-build', 'sass', 'scripts', 'images']);
gulp.task('default', ['build', 'serve', 'watch']);
