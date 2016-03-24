'use strict';

const gulp = require('gulp');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const jade = require('gulp-jade');
const uglify = require('gulp-uglify');
const image = require('gulp-image');
const webserver = require('gulp-webserver');

let paths = {
  dist: 'dist',
  images: 'assets/images',
  stylesheets: 'assets/stylesheets',
  javascripts: 'assets/javascripts',
  templates: ['_includes/**', '_layouts/**', '_mixins/**', '_site/**']
};

gulp.task('clean:images', () => {
  return del(`${paths.dist}/${paths.images}`);
});

gulp.task('clean:stylesheets', () => {
  return del(`${paths.dist}/${paths.stylesheets}`);
});

gulp.task('clean:javascripts', () => {
  return del(`${paths.dist}/${paths.javascripts}`);
});

gulp.task('clean:templates', () => {
  return del(`${paths.dist}/**.html`);
});

gulp.task('images', ['clean:images'], () => {
  return gulp.src(`${paths.images}/**`)
    .pipe(image())
    .pipe(gulp.dest(`${paths.dist}/${paths.images}`))
});

gulp.task('minify', ['clean:stylesheets'], () => {
  return gulp.src(`${paths.stylesheets}/**.css`)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(`${paths.dist}/${paths.stylesheets}`));
});

gulp.task('templates', ['clean:templates'], () => {
  gulp.src(paths.templates[3])
    .pipe(jade())
    .pipe(gulp.dest(paths.dist))
});

gulp.task('uglify', ['clean:javascripts'], () => {
  return gulp.src(`${paths.javascripts}/**.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dist}/${paths.javascripts}`));
});

gulp.task('watch', () => {
  gulp.watch(paths.images, ['images']);
  gulp.watch(`${paths.stylesheets}/**.css`, ['minify']);
  gulp.watch(`${paths.javascripts}/**.js`, ['uglify']);
  gulp.watch(`${paths.images}/**`, ['images']);
  gulp.watch(paths.templates, ['templates']);
});

gulp.task('serve', () => {
  return gulp.src('./dist')
    .pipe(webserver({
      directoryListing: false,
      open: true,
      port: process.env.PORT || '8080',
      host: process.env.IP || 'localhost'
    }));
});

gulp.task('dist', ['images', 'minify', 'templates', 'uglify']);
