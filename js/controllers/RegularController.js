app.controller('RegularController', ['$scope', 'storage', function ($scope, storage) {
    $scope.regularToDoList = storage.get('regularToDoList') || [];
    $scope.regularNewTodo = {
        title: "",
        items: [{name:''}],
        due:null,
        completed: false
    };

    $scope.addRegularToDo = function () {
        $scope.regularToDoList.push($scope.regularNewTodo);
        storage.set('regularToDoList', $scope.regularToDoList);
        $scope.initialize();
    };

    $scope.deleteRegularToDo = function (regulartodo) {
        var index = $scope.regularToDoList.indexOf(regulartodo);
        $scope.regularToDoList.splice(index, 1);
        storage.set('regularToDoList', $scope.regularToDoList);
    };

    $scope.addItem = function () {
        $scope.regularNewTodo.items.push({name:''})
    };

    $scope.initialize = function() {
        $scope.regularNewTodo = {
            title: "",
            items: [{name:''}],
            due:null,
            completed: false
        };
    };
    //$scope.deleteTodo = function($index) {
    //    $scope.todoList.splice($index, 1);
    //};
}]);