app.directive('guide', function(){
    return {
        restrict: 'E',
        scope: {
            guide: '='
        },
        templateUrl: 'templates/directives/guide.html'
    };
});