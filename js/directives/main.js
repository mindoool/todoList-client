app.directive('main', function(){
    return {
        restrict: 'E',
        scope: {
            maintodo: '='
        },
        templateUrl: 'templates/directives/main.html'
    };
});