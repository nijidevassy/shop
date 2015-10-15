angular.module('apiYeomanApp')
.factory("myService", ['$http', function ($http) {
    
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
    service.images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.png","images/Company.png"];
    
    return service;
}]);
