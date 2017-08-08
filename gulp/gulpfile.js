var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps');


gulp.task('scripts', function() {
    return gulp.src([ '../js/src/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('recreo.scripts.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('../js'));

});


