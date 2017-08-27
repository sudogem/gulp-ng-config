'use strict';

var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');

var nodeEnv = process.env.NODE_ENV || 'development';
console.log('nodeEnv:',nodeEnv);

var configureSetup  = {
  constants: {
    common: {
      version: '1.0',
      appName: 'Helloworld app'
    },
    env: {
      development: {
        apiUrl: process.env.MY_NODE_ENV_APIURL_DEV,
        siteName: 'Helloworld App (DEV)',
        cloudant: {
          account: process.env.CLOUDANTDB_DEV_ACCOUNT,
          password: process.env.CLOUDANTDB_DEV_PASSWORD
        }
      },
      production: {
        apiUrl: process.env.MY_NODE_ENV_APIURL_PROD,
        siteName: 'Helloworld App (PROD)',
         cloudant: {
          account: process.env.CLOUDANTDB_PROD_ACCOUNT,
          password: process.env.CLOUDANTDB_PROD_PASSWORD
        }
      }
    }
  }
}

var makeConfig = function() {
  return gulp.src('config.json')
             .pipe(gulpNgConfig('myApp.config', {environment: ['env.'+ nodeEnv, 'common']}))
             .pipe(gulp.dest('client'));
}

gulp.task('config', function() {
  makeConfig();
});
