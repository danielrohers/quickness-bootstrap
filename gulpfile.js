'use strict';

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const jade = require('gulp-jade');
const uglify = require('gulp-uglify');

let paths = {
  dist: 'dist',
  images: 'assets/images',
  stylesheets: 'assets/stylesheets',
  javascripts: 'assets/javascripts',
  templates: ['_includes/**.jade', '_layouts/**.jade', '_mixins/**.jade', '_site/**.jade']
}

gulp.task('images', () => {
  return gulp.src(`${paths.images}/**`)
    .pipe(gulp.dest(`${paths.dist}/${paths.images}`))
});

gulp.task('minify-css', () => {
  return gulp.src(`${paths.stylesheets}/**.css`)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(`${paths.dist}/${paths.stylesheets}`));
});

gulp.task('templates', () => {
  gulp.src(paths.templates[3])
    .pipe(jade())
    .pipe(gulp.dest(paths.dist))
});

gulp.task('uglify', () => {
  return gulp.src(`${paths.javascripts}/**.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dist}/${paths.javascripts}`));
});

gulp.task('watch', () => {
  gulp.watch(paths.images, ['images']);
  gulp.watch(`${paths.stylesheets}/**.css`, ['minify-css']);
  gulp.watch(`${paths.javascripts}/**.js`, ['uglify']);
  gulp.watch(paths.templates, ['templates']);
});

gulp.task('dist', ['images', 'minify-css', 'templates', 'uglify']);
