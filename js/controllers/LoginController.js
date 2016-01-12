app.controller('LoginController',['$scope','ApiService', function($scope, ApiService){
    $scope.data = [];
    ApiService.getData(function(data){
        $scope.data = data.data;
    });

    $scope.user = {
        email:"",
        password:""
    }

}]);