const gulp = require('gulp');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const pug = require('gulp-pug');
const uglify = require('gulp-uglify');
const image = require('gulp-image');
const webserver = require('gulp-webserver');

const paths = {
  dist: 'dist',
  images: 'assets/images',
  stylesheets: 'assets/stylesheets',
  javascripts: 'assets/javascripts',
  templates: {
    includes: '_includes/**',
    layouts: '_layouts/**',
    mixins: '_mixins/**',
    site: '_site/**',
  },
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
    .pipe(gulp.dest(`${paths.dist}/${paths.images}`));
});

gulp.task('minify', ['clean:stylesheets'], () => {
  return gulp.src(`${paths.stylesheets}/**.css`)
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest(`${paths.dist}/${paths.stylesheets}`));
});

gulp.task('templates', ['clean:templates'], () => {
  return gulp.src([`${paths.templates.site}.pug`, `${paths.templates.site}/*.pug`])
    .pipe(pug())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('uglify', ['clean:javascripts'], () => {
  return gulp.src(`${paths.javascripts}/**.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dist}/${paths.javascripts}`));
});

gulp.task('watch', ['dist', 'serve'], () => {
  gulp.watch(paths.images, ['images']);
  gulp.watch(`${paths.stylesheets}/**.css`, ['minify']);
  gulp.watch(`${paths.javascripts}/**.js`, ['uglify']);
  gulp.watch(`${paths.images}/**`, ['images']);
  gulp.watch(Object.values(paths.templates), ['templates']);
});

gulp.task('serve', () => {
  gulp.src('./dist')
    .pipe(webserver({
      directoryListing: false,
      open: true,
      port: process.env.PORT || '8080',
      host: process.env.IP || 'localhost',
    }));
});

gulp.task('dist', ['images', 'minify', 'templates', 'uglify']);
