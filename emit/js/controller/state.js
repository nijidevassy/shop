var myCart = angular.module('myCart', ['ui.router']);

myCart.config(function ($stateProvider, $urlRouterProvider) {
    "use strict";
      $urlRouterProvider.otherwise("/");

     $stateProvider
    .state('about', {
      url: "/",
      templateUrl: "pages/search.html",
         controller : 'cartControl'
    })
    .state('details', {
      url: "/about",
        templateUrl : 'pages/details.html',
            controller  : 'cartDetails'
        });

});










       
