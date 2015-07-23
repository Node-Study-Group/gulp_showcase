var gulp = require('gulp');
// various plugins adapting functionality to gulp streams
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

// gulp.task defines a task--takes a string and a callback (options are also available)
// this task takes less files and outputs css
gulp.task('styles', function(){
  // gulp.src specifies the stream sources by filename
  // this glob grabs everything with a less file extension
  gulp.src('./assets/styles/**/*.less')
    // pipes it through the less plugin, which converts it to css
    .pipe(less())
    // gulp.dest specifies the destination directory, in this case 'build'
    .pipe(gulp.dest('build'));
})


// this task grabs all the scripts, concatenates and minifies them
// and writes sourcemaps so the original files can be part of the stack trace
// pass an array to gulp.src to specify a specific order to files
// in this case, it grabs everything that is not main.js, and then grabs main.js last
gulp.task('scripts', function(){
  gulp.src(['./assets/scripts/**/!(main)*.js', './assets/scripts/main.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
  // gulp.watch watches specified files for changes, then runs the tasks specified by an array.
  gulp.watch('./assets/scripts/**/*.js', ['scripts']);
  gulp.watch('./assets/styles/**/*.less', ['styles']);
})

// The default task happens when you type 'gulp' into the command line
// It runs the tasks specified in the array.
// The same as if you were to type 'gulp scripts' 'gulp styles' 'gulp watch' one by one.
gulp.task('default', ['scripts', 'styles', 'watch'])