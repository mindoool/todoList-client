app.controller('ToDoListController', ['$scope', 'storage', function ($scope, storage) {
    $scope.todoList = storage.get('todoList') || [];
    $scope.newTodo = "";

    $scope.addTodo = function () {
        $scope.todoList.push({
            title: $scope.newTodo,
            completed: false
        });
        storage.set('todoList', $scope.todoList);
        $scope.newTodo = "";
    };

    $scope.deleteTodo = function (todo) {
        var index = $scope.todoList.indexOf(todo);
        $scope.todoList.splice(index, 1);
        storage.set('todoList', $scope.todoList);
    };

    //$scope.deleteTodo = function($index) {
    //    $scope.todoList.splice($index, 1);
    //};
}]);