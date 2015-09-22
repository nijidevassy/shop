/*jslint white:true */
/*global angular */
/*global someFunction */
/*jshint latedef: nofunc */

myCart.directive("addCart",function() {
    "use strict";
    return {
        restrict: 'A',
        scope: true,
        template: '<button id="add" ng-click="addCart()">ADD CART</button>'
        //controller: 'cartControl'
        
        };
});
