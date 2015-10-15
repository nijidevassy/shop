'use strict';

/**
 * @ngdoc function
 * @name apiYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apiYeomanApp
 */
angular
  .module('apiYeomanApp')

.controller('appCntrl', ['$scope', '$location', function ($scope, $location) {
    "use strict";

    $scope.login = function () {
        if ($scope.username === "company"  && $scope.password === "1234") {
            $location.path('/about');
        } else {
            $scope.msg = "failed to authenticate";
        }
    };
}]);
