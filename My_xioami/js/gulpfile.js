var gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const watch = require('gulp-watch');
const connect = require('gulp-connect');

gulp.task('default', ['connect', 'watch', 'all']);

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        port: 8080,
        livereload: true
    });
});

gulp.task('minihtml', function () {
    gulp.src('My_xiaomi/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, minifyJS: true, minifyCSS: true }))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
    console.log('压缩html');
});

gulp.task('minicss', function () {
    gulp.src('My_xiaomi/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
    console.log('压缩css');
});

gulp.task('minijs', function () {

});

gulp.task('watch', function () {
    gulp.src('My_xiaomi/*html', ['minihtml'])
    .pipe(gulp.dest('dist'))
});

gulp.task('all', ['minihtml', 'minicss', 'minijs'], function () {
    console.log('大家好');
});