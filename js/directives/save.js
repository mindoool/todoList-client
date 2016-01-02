app.directive('save', function(){
    return {
        restrict: 'E',
        scope: {
            todo: '='
        },
        templateUrl: 'templates/directives/save.html'
    };
});