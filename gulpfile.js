var gulp   = require('gulp'),
  	server = require('gulp-server-livereload'),
  	concat = require('gulp-concat'),
  	rename = require('gulp-rename'),
  	uglify = require('gulp-uglify');
 
gulp.task('serve', function() {
  gulp.src('./')
    .pipe(server({
    	defaultFile: 'index.html',
      livereload: true,
      directoryListing: true,
      open: true,
      enable: true,
        filter: function(filePath, cb) {
          cb( !(/assets/.test(filePath)) );
        }
    }));
});

gulp.task('scripts', function() {
  return gulp.src([
  	'./src/scripts/jquery.js',
  	'./src/scripts/tether.js',
  	'./src/scripts/bootstrap.js',
  	'./src/scripts/custom.js'
  	])
    .pipe(concat({ path: 'main.min.js', stat: { mode: 0666 }}))
    .pipe(uglify())
    .pipe(gulp.dest('./src/scripts'));
});

gulp.task('default', ['watch', 'scripts', 'images']);