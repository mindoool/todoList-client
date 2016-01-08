app.directive('regular', function(){
    return {
        restrict: 'E',
        scope: {
            regulartodo: '='
        },
        controller: ['$scope', function($scope) {
            $scope.regulartodo.due = new Date($scope.regulartodo.due);
            $scope.addItem = function () {
                $scope.regulartodo.items.push({name:''})
            };
        }],
        templateUrl: 'templates/directives/regular.html'
    };
});