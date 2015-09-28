
myCart.directive("addCart",function() {
    return {
        restrict: 'A',
        scope: true,
        template: '<button id="add" ng-click="addCart()">ADD CART</button>'
        //controller: 'cartControl'
        
        };
});
