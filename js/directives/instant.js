app.directive('instant', function(){
    return {
        restrict: 'E',
        scope: {
            todo: '='
        },
        templateUrl: 'templates/directives/instant.html'
    };
});