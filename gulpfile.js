var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');



gulp.task('styles', function(){
  gulp.src('./assets/styles/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('build'));
})

gulp.task('scripts', function(){
  gulp.src(['./assets/scripts/**/!(main)*.js', './assets/scripts/main.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
  gulp.watch('./assets/scripts**/*.js', ['scripts']);
  gulp.watch('./assets/styles/**/*.less', ['styles']);
})

gulp.task('default', ['scripts', 'styles', 'watch'])