app.controller('GuideController', ['$scope', 'storage', function ($scope, storage) {
    $scope.guideList = storage.get('guideList') || [];
    $scope.newGuide = "";

    $scope.addGuide = function () {
        $scope.guideList.push({
            title: $scope.newGuide,
            completed: false
        });
        storage.set('guideList', $scope.guideList);
        $scope.newGuide = "";
    };

    $scope.deleteGuide = function (guide) {
        var index = $scope.guideList.indexOf(guide);
        $scope.guideList.splice(index, 1);
        storage.set('guideList', $scope.guideList);
    };

    //$scope.deleteTodo = function($index) {
    //    $scope.todoList.splice($index, 1);
    //};
}]);