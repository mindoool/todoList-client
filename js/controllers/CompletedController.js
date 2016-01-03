app.controller('CompletedController', ['$scope', 'storage', function ($scope, storage) {
    $scope.completedToDoList = storage.get('completedToDoList') || [];
    //$scope.completedTodo = "";

    //$scope.addCompletedToDo = function () {
    //    $scope.completedToDoList.push({
    //        title: $scope.completedTodo,
    //        completed: false
    //    });
    //    storage.set('completedToDoList', $scope.completedToDoList);
    //    $scope.completedNewTodo = "";
    //};

    $scope.deleteCompletedToDo = function (completetodo) {
        var index = $scope.completedToDoList.indexOf(completetodo);
        $scope.completedToDoList.splice(index, 1);
        storage.set('completedToDoList', $scope.completedToDoList);
    };

    //$scope.deleteTodo = function($index) {
    //    $scope.todoList.splice($index, 1);
    //};
}]);