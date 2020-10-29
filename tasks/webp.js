'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import gulpif from 'gulp-if';
// import imageminWebp from 'imagemin-webp';
import webp from 'gulp-webp';
import debug from 'gulp-debug';
import browsersync from 'browser-sync';
import yargs from 'yargs';

const argv = yargs.argv,
  production = !!argv.production;

gulp.task('webp', () => {
  gulp
    .src(paths.webp.srcjpg)
    .pipe(
      webp(
        gulpif(production, {
          method: 4,
          quality: 75,
        })
      )
    )
    .pipe(gulp.dest(paths.webp.dist));

  return gulp
    .src(paths.webp.srcpng)
    .pipe(
      webp(
        gulpif(production, {
          method: 6,
          quality: 100,
        })
      )
    )
    .pipe(gulp.dest(paths.webp.dist))
    .pipe(
      debug({
        title: 'Images',
      })
    )
    .on('end', browsersync.reload);
});
