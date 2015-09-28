myCart.controller('cartControl', ['$scope', "loadimg", '$location', function ($scope, loadimg, $location) {
    "use strict";
    $scope.itemObjects = loadimg.items;
    
        
    $scope.$on('itemClicked', function (event, index) {
        loadimg.itemClicked = parseInt(index, 10);
        $location.path('/about');
    });

    
}]);

