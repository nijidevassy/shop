/*jslint white:true */
/*global angular */

var myCart = angular.module('myCart', []);
myCart.controller('cartControl', ['$scope', "loadimg", function ($scope, loadimg) {
    "use strict";
    $scope.totalCost = 0;
    $scope.current = -1;
    $scope.itemObjects = loadimg;
    
        
    $scope.details = function (i) {
        $scope.head = "Product details";
        $scope.name = "NAME :" + $scope.itemObjects[i].name;
        $scope.price = "PRICE :" + $scope.itemObjects[i].price;
        $scope.avail = "AVAILABILITY :" + $scope.itemObjects[i].availability;
        $scope.total = "TOTAL COST : " + $scope.totalCost;
        $scope.current = i;
    };

    $scope.addCart = function () {

        if ($scope.current === -1) {
            $scope.head = "No item selected!!!";
        } else {
            $scope.count = $scope.itemObjects[$scope.current].availability;
            if ($scope.count > 0) {
                $scope.count = $scope.count - 1;
                $scope.itemObjects[$scope.current].availability = $scope.count;
                $scope.totalCost = $scope.totalCost + $scope.itemObjects[$scope.current].price;
                $scope.cart[$scope.current] =  $scope.cart[$scope.current] + 1;
                $scope.details($scope.current);
            }
        }
    };
    $scope.cancelCart = function () {
    
        if ($scope.current === -1) {
            $scope.head = "No item on cart!!!";
        } else {
            $scope.countCancel = $scope.itemObjects[$scope.current].availability;
            if ($scope.cart[$scope.current] > 0) {
                $scope.countCancel = $scope.countCancel + 1;
                $scope.itemObjects[$scope.current].availability = $scope.countCancel;
                $scope.cart[$scope.current] = $scope.cart[$scope.current] - 1;
                $scope.totalCost = $scope.totalCost - $scope.itemObjects[$scope.current].price;
                $scope.details($scope.current);
            }
        }
    };
}]);

    




       
