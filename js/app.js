var app = angular.module('ToDoList', ['ngMaterial','ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('index', {
            url:'/',
            templateUrl: 'templates/index.html',
            controller: "MainController"
        });
});