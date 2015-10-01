app.controller('mainCntrl', ["myService", '$scope', '$location', function (myService, $scope, $location) {

    "use strict";
    
    myService.details();
    console.log(myService);
    $scope.data = myService.data;
    
    
    $scope.go = function (path, index) {
        $location.path(path);
        myService.itemClicked = index;
    };

}]);
  
               
               
    
