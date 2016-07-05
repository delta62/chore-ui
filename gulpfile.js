'use strict';

const gulp  = require('gulp'),
  ts        = require('gulp-typescript'),
  plumber   = require('gulp-plumber'),
  clean     = require('gulp-clean'),
  webserver = require('gulp-webserver'),
  webpack   = require('webpack'),
  gutil     = require('gulp-util');

const tsProj = ts.createProject('./tsconfig.json', {
  experimentalDecorators: true
});

gulp.task('clean', () => {
  return gulp.src('dist/')
    .pipe(plumber())
    .pipe(clean());
});

gulp.task('serve', [ 'ts' ], () => {
  gulp.src('.')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('ts', [ 'clean' ], () => {
  return gulp.src([ 'src/**/*.ts', 'typings/index.d.ts' ])
    .pipe(plumber())
    .pipe(ts(tsProj))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', [ 'ts' ]);
