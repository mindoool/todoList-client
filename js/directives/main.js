app.directive('main', function(){
    return {
        restrict: 'E',
        scope: {
            maintodo: '='
        },
        controller: ['$scope', function($scope) {
            $scope.maintodo.due = new Date($scope.maintodo.due);
            $scope.addItem = function () {
                $scope.maintodo.items.push({name:''})
            };
        }],
        templateUrl: 'templates/directives/main.html'
    };
});