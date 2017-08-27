(function(){
  'use strict';

  var app = angular.module('myApp', ['myApp.config']);

  app.controller('MainController', MainController);

  function MainController($scope, siteName, apiUrl, cloudant, version, appName) {
    $scope.siteNameEnv = siteName;
    $scope.apiUrlEnv = apiUrl;
    $scope.cloudantEnv = cloudant;
    $scope.versionEnv = version;
    $scope.appNameEnv = appName;
  }

})();
