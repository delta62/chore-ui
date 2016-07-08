'use strict';

const gulp    = require('gulp'),
  ts          = require('gulp-typescript'),
  plumber     = require('gulp-plumber'),
  clean       = require('gulp-clean'),
  less        = require('gulp-less'),
  browserSync = require('browser-sync').create(),
  fallback    = require('connect-history-api-fallback');

const tsProj = ts.createProject('./tsconfig.json');

gulp.task('clean', () => {
  return gulp.src('dist/')
    .pipe(plumber())
    .pipe(clean());
});

gulp.task('serve', [ 'less', 'ts' ], () => {
  browserSync.init({
    server: {
      baseDir: './',
      middleware: [
        fallback({ index: '/index.html' })
      ]
    }
  });

  gulp.watch('src/**/*.less', [ 'less' ]);
  gulp.watch('src/**/*.ts', [ 'ts-watch' ]);
  gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('less', () => {
  return gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('ts-watch', [ 'ts' ], browserSync.reload);

gulp.task('ts', () => {
  return gulp.src([ 'src/**/*.ts', 'typings/index.d.ts' ])
    .pipe(plumber())
    .pipe(ts(tsProj))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', [ 'serve' ]);
