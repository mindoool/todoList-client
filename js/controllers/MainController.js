app.controller('MainController', ['$scope', 'storage', function ($scope, storage) {
    $scope.mainToDoList = storage.get('mainToDoList') || [];
    $scope.mainNewTodo = {
        title: "",
        items: [{name:''}],
        due:null,
        completed: false
    };

    $scope.addMainToDo = function () {
        $scope.mainToDoList.push($scope.mainNewTodo);
        storage.set('mainToDoList', $scope.mainToDoList);
        $scope.initialize();
    };

    $scope.deleteMainToDo = function (maintodo) {
        var index = $scope.mainToDoList.indexOf(maintodo);
        $scope.mainToDoList.splice(index, 1);
        storage.set('mainToDoList', $scope.mainToDoList);
    };

    $scope.addItem = function () {
        $scope.mainNewTodo.items.push({name:''})
    };

    $scope.initialize = function() {
        $scope.mainNewTodo = {
            title: "",
            items: [{name:''}],
            due:null,
            completed: false
        };
    };

    $scope.readonlyChange = function($scope) {
        $scope.checked = true;
    };

    //$scope.deleteTodo = function($index) {
    //    $scope.todoList.splice($index, 1);
    //};
}]);