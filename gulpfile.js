var browserify = require('browserify'),
  gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  less = require('gulp-less'),
  cleanCSS = require('gulp-clean-css'),
  uglify = require('gulp-uglify');

gulp.task('browserify-debug', function() {
  return browserify('./src/js/App.js', {debug:true, transform: ['node-underscorify']})
  .bundle()
  .on('error', function(err){console.log(err);this.emit("end");})
  .pipe(source('main.js'))
  .pipe(gulp.dest('../public/test/js/'));
});

gulp.task('browserify-production', function() {
  return browserify('./src/js/App.js', {transform: ['node-underscorify','babelify']})
    .bundle()
    .on('error', function(err){console.log(err);this.emit("end");})
    .pipe(source('main.js'))
    .pipe(buffer())
    // It should be removed by babily
    .pipe(uglify())
    .pipe(gulp.dest('../public/test/js/'));
});

gulp.task('less', function () {
  return gulp.src('./src/css/style.less')
  .pipe(less().on('error', function (err) {
    console.log(err);
    this.emit("end");
  }))
	.pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('../public/test/css/'));
});


gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['browserify-debug', 'less']);
  return;
});

gulp.task('build',['browserify-production', 'less'])
