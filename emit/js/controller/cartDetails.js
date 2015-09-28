myCart.controller('cartDetails', ['$scope', "loadimg", '$location', function ($scope, loadimg, $location) {
    "use strict";
    
    $scope.head = "Product details";
    $scope.itemObjects = loadimg.items;
    $scope.totalCost = 0;
    $scope.current = loadimg.itemClicked;
    
    $scope.details = function () {
        $scope.name = "NAME :" + $scope.itemObjects[$scope.current].name;
        $scope.price = "PRICE :" + $scope.itemObjects[$scope.current].price;
        $scope.avail = "AVAILABILITY :" + $scope.itemObjects[$scope.current].availability;
        $scope.total = "TOTAL COST : " + $scope.totalCost;
        $scope.imag = $scope.itemObjects[$scope.current].image;
    };
      
    $scope.details();
                                  
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
    
    $scope.go = function (path) {
        $location.path(path);
    };
    
    
}]);


