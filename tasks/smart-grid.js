'use strict';

import gulp from 'gulp';
import { paths } from '../gulpfile.babel';
const smartgrid = require('smart-grid');

gulp.task('smart-grid', (cb) => {
  smartgrid(paths.styles.src + '/vendor/import/', {
    filename: '_smart-grid',
    outputStyle: 'scss' /* less || scss || sass || styl */,
    columns: 12 /* number of grid columns */,
    offset: '30px' /* gutter width px || % || rem */,
    mobileFirst: false /* mobileFirst ? 'min-width' : 'max-width' */,
    mixinNames: {
      container: 'container',
    },
    container: {
      maxWidth: '1320px' /* max-width оn very large screen */,
      fields: '15px' /* side fields */,
    },
    breakPoints: {
      xl: {
        width: '1599.98px' /* -> @media (max-width: 1599.98px) */,
      },
      lg: {
        width: '1199.98px',
      },
      md: {
        width: '1023.98px',
      },
      sm: {
        width: '767.98px',
        // fields:"15px" /* set fields only if you want to change container.fields */,
      },
      xs: {
        width: '539.98px',
      },
      /* 
          We can create any quantity of break points.
    
          some_name: {
              width: 'Npx',
              fields: 'N(px|%|rem)',
              offset: 'N(px|%|rem)'
          }
          */
    },
  });
  cb();
});
