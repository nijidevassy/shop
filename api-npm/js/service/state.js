app.config(function ($stateProvider, $urlRouterProvider) {
    "use strict";
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: "/",
            templateUrl : "pages/login.html",
            controller : 'appCntrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: "pages/about.html",
            controller : 'mainCntrl'
        })
        .state('details', {
            url: "/details",
            templateUrl : 'pages/details.html',
            controller  : 'detailsCntrl'
        });

});
