app.directive('save', function(){
    return {
        restrict: 'E',
        scope: {
            savedtodo: '='
        },
        templateUrl: 'templates/directives/save.html'
    };
});