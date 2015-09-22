var myCart = angular.module('myCart',[]);
myCart.controller('cartControl', ['$scope', "loadimg", function ($scope,loadimg) {

        $scope.totalCost = 0;
    
        $scope.current = "";    
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

            if($scope.current == "")
            {
                $scope.head = "No item selected!!!";
            }
            else
            {
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
    
            if($scope.current == "")
            {
                $scope.head = "No item on cart!!!";
            }
            else {
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

myCart.service("loadimg",function() {
    return [
            {'name': 'Mens Jacket',
                'price': 2500,
                'availability': 5,
                'image': "assets/jacket.jpg"},
            {'name': 'Ladies Jacket',
                'price': 1500,
                'availability': 5,
                'image': "assets/jacket1.jpg"},
            {'name': 'Travel Bag Backpack',
                'price': 3000,
                'availability': 8,
                'image': "assets/bag.jpg"},
            {'name': 'Travel Bag',
                'price': 2750,
                'availability': 9,
                'image': "assets/bag1.jpg"},
            {'name': 'Mens Shoe',
                'price': 2000,
                'availability': 10,
                'image': "assets/footware.jpg"},
            {'name': 'Ladies Shoe',
                'price': 1750,
                'availability': 10,
                'image': "assets/footware1.jpg"},
            {'name': 'Canon SLR',
                'price': 19000,
                'availability': 6,
                'image': "assets/camera.jpg"},
            {'name': 'FastTrack Sunglasses',
                'price': 1000,
                'availability': 15,
                'image': "assets/sunglasses.jpg"},
            {'name': 'Acer Laptop',
                'price': 35000,
                'availability': 7,
                'image': "assets/laptop.jpg"}
        ]; 
    
});
    
myCart.directive("addCart",function() {
    return {
        restrict: 'A',
        scope: true,
        template: '<button id="add" ng-click="addCart()">ADD CART</button>'
        //controller: 'cartControl'
        
        };
});

myCart.directive("cancelCart",function() {
    return {
        restrict: 'A',
        scope: true,
        template: '<button id="cancel" ng-click="cancelCart()">CANCEL  </button>'
    };
});


       