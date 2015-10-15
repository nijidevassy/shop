'use strict';

/**
 * @ngdoc overview
 * @name apiYeomanApp
 * @description
 * # apiYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('apiYeomanApp', [
    'ngMessages','ui.router'
  ])
    
.config(function ($stateProvider, $urlRouterProvider) {
    "use strict";
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: "/",
            templateUrl : "views/login.html",
            controller : 'appCntrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: "views/about.html",
            controller : 'mainCntrl'
        })
        .state('details', {
            url: "/details",
            templateUrl : 'views/details.html',
            controller  : 'detailsCntrl'
        });

});
