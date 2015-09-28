var myCart = angular.module('myCart', ['ngRoute']);


myCart.config(function ($routeProvider) {
    "use strict";
    $routeProvider

            // route for the home page
            .when('/', {
            templateUrl : 'pages/search.html',
            controller  : 'cartControl'
        })

            // route for the about page
            .when('/about', {
            templateUrl : 'pages/details.html',
            controller  : 'cartDetails'
        });
});







       
