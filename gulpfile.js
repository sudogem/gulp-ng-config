'use strict';

var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');

var nodeEnv = process.env.NODE_ENV || 'development';
console.log('nodeEnv:',nodeEnv);
var configureSetup;

switch(nodeEnv) {
  case 'development':
    configureSetup = {
      constants: {
        common: {
          version: '1.0',
          appName: 'Helloworld app'
        },
        siteName: 'Helloworld App (DEV)',
        apiUrl: process.env.MY_NODE_ENV_APIURL_DEV,
        cloudant: {
          account: process.env.CLOUDANTDB_DEV_ACCOUNT || 'cloudant_dev_user',
          password: process.env.CLOUDANTDB_DEV_PASSWORD || 'cloudant_dev_pass'
        },
        mongoDB: {
          mongoDB_URL: process.env.mongoDB_DEV_URL || 'mongodb://local-dev-mongo/db'
        }
      }
    }
    break;
  case 'production':
    configureSetup = {
      constants: {
        common: {
          version: '1.0',
          appName: 'Helloworld app'
        },
        siteName: 'Helloworld App (PROD)',
        apiUrl: process.env.MY_NODE_ENV_APIURL_PROD || 'prod-helloapp.com',
        cloudant: {
          account: process.env.CLOUDANTDB_PROD_ACCOUNT || 'cloudant_prod_user',
          password: process.env.CLOUDANTDB_PROD_PASSWORD || 'cloudant_prod_pass'
        },
        mongoDB: {
          mongoDB_URL: process.env.mongoDB_PROD_URL || 'mongodb://production-mongo/db'
        }
      }
    }
    break;
}

var makeConfig = function() {
  return gulp.src('config.json')
             .pipe(gulpNgConfig('myApp.config', configureSetup))
             .pipe(gulp.dest('client'));
}

gulp.task('config', function() {
  makeConfig();
});
