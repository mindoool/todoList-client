app.controller('MainController',['$scope','ApiService', function($scope, ApiService){
    $scope.data = [];
    ApiService.getData(function(data){
        $scope.data = data.data;
    });
}]);