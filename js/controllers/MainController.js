app.controller('MainController', ['$scope', 'storage', function ($scope, storage) {
    $scope.mainToDoList = storage.get('mainToDoList') || [];
    $scope.mainNewTodo = "";

    $scope.addMainToDo = function () {
        $scope.mainToDoList.push({
            title: $scope.mainNewTodo,
            completed: false
        });
        storage.set('mainToDoList', $scope.mainToDoList);
        $scope.mainNewTodo = "";
    };

    $scope.deleteMainToDo = function (maintodo) {
        var index = $scope.mainToDoList.indexOf(maintodo);
        $scope.mainToDoList.splice(index, 1);
        storage.set('mainToDoList', $scope.mainToDoList);
    };

    //$scope.deleteTodo = function($index) {
    //    $scope.todoList.splice($index, 1);
    //};
}]);