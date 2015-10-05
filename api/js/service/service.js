var app = angular.module('company', ['ui.router', 'ngMessages']);

app.factory("myService", ['$http', function ($http) {
    
    "use strict";
    var service = {};
   //service.data = [];
    service.details = function (url) {
        var getData = $http.get(url);
        getData.success(function (response) {
            service.data = response.results;
        });
        getData.error(function (response) {
            console.warn("Couldnt obtain Data");
        });
    };
    service.itemClicked = "";
    return service;
}]);