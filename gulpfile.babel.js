'use strict';

import gulp from 'gulp';

const requireDir = require('require-dir'),
  paths = {
    views: {
      src: ['./src/views/index.pug', './src/views/pages/**/*.pug'],
      dist: './dist/',
      watch: './src/views/**/*.pug',
      html: {
        src: [
          './src/views/**/*.pug',
          '!./src/views/pages/**/*.pug',
          '!./src/views/layouts/*.pug',
          '!./src/views/**/+*.pug',
          '!./src/views/index.pug',
          '!./src/views/helpers/*.pug',
        ],
      },
    },
    styles: {
      src: './src/styles/',
      dist: './dist/styles/',
      watch: ['./src/views/**/*.{scss,sass}', './src/styles/**/*.{scss,sass}'],
    },
    scripts: {
      src: './src/js/main.js',
      dist: './dist/js/',
      watch: ['./src/views/**/*.js', './src/js/**/*.js'],
    },
    images: {
      src: [
        './src/img/**/*.{jpg,jpeg,png,gif,tiff,svg,webp}',
        '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff, webp}',
      ],
      dist: './dist/img/',
      watch: './src/img/**/*.{jpg,jpeg,png,gif,svg}',
    },
    webp: {
      srcjpg: ['./src/img/**/*.{jpg,jpeg}', '!./src/img/favicon/*.{jpg,jpeg}'],
      srcpng: [
        './src/img/**/*.{png,gif,tiff}',
        '!./src/img/favicon/*.{png,gif,tiff}',
      ],
      dist: './dist/img/',
      watch: [
        './src/img/**/*.{jpg,jpeg,png,gif,tiff}',
        '!./src/img/favicon.{jpg,jpeg,png,gif,tiff}',
      ],
    },
    sprites: {
      src: './src/img/svg/*.svg',
      dist: './dist/img/sprites/',
      watch: './src/img/svg/*.svg',
    },
    fonts: {
      src: './src/fonts/',
      dist: './dist/fonts/',
      watch: './src/fonts/**/*.{woff,woff2,otf,ttf}',
    },
    favicons: {
      src: './src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
      dist: './dist/img/favicons/',
    },
  };

requireDir('./tasks/');

export { paths };

export const start = gulp.series('otf2ttf', 'fonts2woff');

export const development = gulp.series(
  'clean',
  'smart-grid',
  gulp.parallel([
    'views',
    'views2html',
    'styles',
    'scripts',
    'images',
    // 'webp',
    'sprites',
    'fonts',
    'favicons',
  ]),
  'fonts2style',
  gulp.parallel('serve')
);

export const prod = gulp.series(
  'clean',
  gulp.series([
    'views',
    'styles',
    'scripts',
    'images',
    // 'webp',
    'sprites',
    'fonts',
    'favicons',
  ])
);

export default development;
