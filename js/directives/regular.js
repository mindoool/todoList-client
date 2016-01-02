app.directive('regular', function(){
    return {
        restrict: 'E',
        scope: {
            regulartodo: '='
        },
        templateUrl: 'templates/directives/regular.html'
    };
});