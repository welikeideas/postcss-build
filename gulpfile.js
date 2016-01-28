// specify the plugins we want to use
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');

// let's do this...
gulp.task('default', function () {

    return gulp.src('src/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
            require('precss'),
            require('autoprefixer')
        ]))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/'));
});
