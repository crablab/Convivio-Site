'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell');

var sourceDir = './source/';
var buildDir = './destination'
var sassDir = './source/_sass/**/*.scss';
var cssDir = './destination/css';

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

gulp.task('watch', function() {
  gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(sassDir, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp.watch(['source/**/*.md', 'source/**/*.html', 'source/**/*.xml', 'source/**/*.txt', 'source/**/*.js'], ['jekyll-rebuild']);

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

gulp.task('build', ['jekyll-build', 'sass']);
gulp.task('default', ['build', 'serve', 'watch']);
