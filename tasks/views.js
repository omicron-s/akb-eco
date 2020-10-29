'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import pug from 'gulp-pug';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import htmlValidator from 'gulp-w3c-html-validator';
/* import webphtml from "gulp-webp-html"; */
import browsersync from 'browser-sync';
import yargs from 'yargs';
import fs from 'fs';

const argv = yargs.argv,
  production = !!argv.production;

gulp.task('views', () => {
  return (
    gulp
      .src(paths.views.src, { base: './src/views/' })
      .pipe(
        pug({
          pretty: true,
          locals: {
            mainData: JSON.parse(
              fs.readFileSync('./src/data/main.json', 'utf8')
            ),
          },
        })
      )
      .pipe(gulpif(production, replace('.css', '.min.css')))
      .pipe(gulpif(production, replace('.js', '.min.js')))
      /*     .pipe(webphtml()) */
      .pipe(gulp.dest(paths.views.dist))
      .pipe(htmlValidator())
      .pipe(htmlValidator.reporter())
      .pipe(browsersync.stream())
  );
});

gulp.task('views2html', () => {
  return gulp
    .src(paths.views.html.src)
    .pipe(
      pug({
        pretty: true,
        locals: {
          mainData: JSON.parse(fs.readFileSync('./src/data/main.json', 'utf8')),
        },
      })
    )
    .pipe(gulp.dest('./src/views/'))
    .pipe(browsersync.stream());
});
