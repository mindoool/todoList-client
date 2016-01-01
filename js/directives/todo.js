app.directive('todo', function(){
    return {
        restrict: 'E',
        scope: {
            todo: '='
        },
        templateUrl: 'templates/directives/todo.html'
    };
});