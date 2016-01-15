app.controller('InstantController', ['$scope', 'storage', '$http', function ($scope, storage, $http) {
    $scope.todoList = storage.get('todoList') || [];
    $scope.newTodo = {
        description:""
    }

    //$scope.addTodo = function () {
    //    $scope.todoList.push({
    //        title: $scope.newTodo,
    //        completed: false
    //    });
    //    storage.set('todoList', $scope.todoList);
    //    $scope.newTodo = "";
    //};

    $scope.deleteTodo = function (todo) {
        var index = $scope.todoList.indexOf(todo);
        $scope.todoList.splice(index, 1);
        storage.set('todoList', $scope.todoList);
    };

    $scope.addTodo = function () {
        console.log('hi')
        $http.post('http://localhost:11080/api/instant-works', $scope.newTodo.description)
            .then(function(response) {
                console.log(response);
                storage.set('todoList', $scope.todoList);
                $scope.newTodo = "";
            });
    };

    //$scope.deleteTodo = function($index) {
    //    $scope.todoList.splice($index, 1);
    //};
}]);