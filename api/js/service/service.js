var app = angular.module('company', ['ui.router','ngMessages']);

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


app.factory("myService", ['$http', function($http) {
    
   "use strict";
    var service = {};
   service.data = [];
   service.details = function () {
       var getData = $http.get("http://nodejs-qbjsstudy.rhcloud.com/api/get_shop_data");
           getData.success(function (response) {
               service.data = response.results;
           })
           getData.error(function (response) {
           console.warn("Couldnt obtain Data");
           });
   };
    service.itemClicked="";
       return service;
}]);