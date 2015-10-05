app.controller('mainCntrl', ["myService", '$scope', '$location', '$timeout', function (myService, $scope, $location, $timeout) {

    "use strict";
    $scope.detail = [];
    myService.details();
    console.log(myService);
    $scope.data = myService;
    
    $scope.detail = $scope.data.data;
    //$timeout( function(){ console.log("in" + $scope.detail); }, 5000);

    console.log($scope.detail);
    $scope.go = function (path, index) {
        $location.path(path);
        myService.itemClicked = index;
    };

}]);
  
               
               
    
