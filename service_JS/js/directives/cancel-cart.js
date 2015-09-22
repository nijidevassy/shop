/*jslint white:true */
/*global angular */
/*global someFunction */

myCart.directive("cancelCart",function() {
    "use strict";
    return {
        restrict: 'A',
        scope: true,
        template: '<button id="cancel" ng-click="cancelCart()">CANCEL  </button>'
    };
});

