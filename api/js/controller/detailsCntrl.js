app.controller('detailsCntrl', ["myService", '$scope', '$location', function (myService, $scope, $location) {

    "use strict";
    $scope.current = myService.itemClicked;
     
    $scope.companyName = myService.data;
    
        $scope.name = $scope.companyName[$scope.current].details.company;
        $scope.head = "COMPANY PROFILE";
        $scope.id = $scope.companyName[$scope.current].id;
        $scope.title = $scope.companyName[$scope.current].title;
        $scope.cost =  $scope.companyName[$scope.current].cost;
        $scope.stockleft = $scope.companyName[$scope.current].details.stockLeft;
        $scope.buylimit = $scope.companyName[$scope.current].details.buyLimit;
        $scope.summary = $scope.companyName[$scope.current].details.summery;
    
}]);

