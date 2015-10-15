'use strict';

/**
 * @ngdoc overview
 * @name apiNpmApp
 * @description
 * # apiNpmApp
 *
 * Main module of the application.
 */
angular
  .module('apiNpmApp', [
    'ngMessages',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
