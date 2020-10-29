'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import favicons from 'gulp-favicons';
import debug from 'gulp-debug';

gulp.task('favicons', () => {
  return gulp
    .src(paths.favicons.src)
    .pipe(
      favicons({
        lang: 'ru-RU',
        icons: {
          favicons: true,
          android: true,
          appleIcon: true,
          online: false,
          appleStartup: false,
          firefox: false,
          yandex: false,
          windows: false,
          coast: false,
        },
        
      })
    )
    .pipe(gulp.dest(paths.favicons.dist))
    .pipe(
      debug({
        title: 'Favicons',
      })
    );
});
