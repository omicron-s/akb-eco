import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import debug from 'gulp-debug';
import fonter from 'gulp-fonter';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import fs from 'fs';

gulp.task('fonts', () => {
  return gulp
    .src(paths.fonts.src + '**/*.{woff,woff2}')
    .pipe(gulp.dest(paths.fonts.dist))
    .pipe(
      debug({
        title: 'Fonts',
      })
    );
});

gulp.task('fonts2woff', () => {
  gulp
    .src(paths.fonts.src + '**/*.ttf')
    .pipe(ttf2woff())
    .pipe(gulp.dest(paths.fonts.src))
    .pipe(
      debug({
        title: 'Fonts woff',
      })
    );
  return gulp
    .src(paths.fonts.src + '**/*.ttf')
    .pipe(ttf2woff2())
    .pipe(gulp.dest(paths.fonts.src))
    .pipe(
      debug({
        title: 'Fonts woff2',
      })
    );
});

gulp.task('otf2ttf', () => {
  return gulp
    .src(paths.fonts.src + '**/*.ttf')
    .pipe(
      fonter({
        formats: ['ttf'],
      })
    )
    .pipe(gulp.dest(paths.fonts.src))
    .pipe(
      debug({
        title: 'Fonts otf',
      })
    );
});

gulp.task('fonts2style', (cb) => {
  let file_content = fs.readFileSync(paths.styles.src + '/base/_fonts.scss');
  if (file_content == '') {
    fs.writeFile(paths.styles.src + '/base/_fonts.scss', '', cb);
    return fs.readdir(paths.fonts.src, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(
              paths.styles.src + '/base/_fonts.scss',
              '@include font("' +
                fontname +
                '", "' +
                fontname +
                '", "400", "normal");\r\n',
              cb
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
  cb();
});
