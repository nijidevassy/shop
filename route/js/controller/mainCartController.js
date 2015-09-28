myCart.controller('cartControl', ['$scope', "loadimg", '$location', function ($scope, loadimg, $location) {
    "use strict";
    $scope.itemObjects = loadimg.items;
        
    $scope.go = function (path, index) {
        $location.path(path);
        loadimg.itemClicked = parseInt(index, 10);
    };
}]);

