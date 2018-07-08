const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

// gulp.task('copyHTML', function () {
//   return gulp.src('./source/**/*.html')
//     .pipe(gulp.dest('./public/'))
// })

gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
  // watch 指定的路徑
  gulp.watch('./source/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);