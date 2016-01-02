app.controller('RegularController', ['$scope', 'storage', function ($scope, storage) {
    $scope.regularToDoList = storage.get('regularToDoList') || [];
    $scope.regularNewTodo = "";

    $scope.addRegularToDo = function () {
        $scope.regularToDoList.push({
            title: $scope.regularNewTodo,
            completed: false
        });
        storage.set('regularToDoList', $scope.regularToDoList);
        $scope.regularNewTodo = "";
    };
    console.log($scope.regularToDoList)

    $scope.deleteRegularToDo = function (regularToDo) {
        var index = $scope.regularToDoList.indexOf(regularToDo);
        $scope.regularToDoList.splice(index, 1);
        storage.set('regularToDoList', $scope.regularToDoList);
    };

    //$scope.deleteTodo = function($index) {
    //    $scope.todoList.splice($index, 1);
    //};
}]);