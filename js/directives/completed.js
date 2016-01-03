app.directive('completed', function(){
    return {
        restrict: 'E',
        scope: {
            completedtodo: '='
        },
        templateUrl: 'templates/directives/completed.html'
    };
});