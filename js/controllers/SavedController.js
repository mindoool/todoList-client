app.controller('SavedController', ['$scope', 'storage', function ($scope, storage) {
    $scope.savedToDoList = storage.get('savedToDoList') || [];
    //$scope.regularNewTodo = "";
    //
    //$scope.addRegularToDo = function () {
    //    $scope.regularToDoList.push({
    //        title: $scope.regularNewTodo,
    //        completed: false
    //    });
    //    storage.set('regularToDoList', $scope.regularToDoList);
    //    $scope.regularNewTodo = "";
    //};

    $scope.deleteSavedToDo = function (savedtodo) {
        var index = $scope.savedToDoList.indexOf(savedtodo);
        $scope.savedToDoList.splice(index, 1);
        storage.set('savedToDoList', $scope.savedToDoList);
    };

    $scope.mainDate = new Date();

    //$scope.deleteTodo = function($index) {
    //    $scope.todoList.splice($index, 1);
    //};
}]);