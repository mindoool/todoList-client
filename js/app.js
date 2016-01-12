var app = angular.module('ToDoList', ['ngMaterial','ngMessages','ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url:'/login',
            templateUrl: 'templates/login.html',
            controller: "LoginController"
        })
        .state('index', {
            url:'/',
            templateUrl: 'templates/index.html',
            controller: "ToDoListController"
        })
        .state('saves', {
            url:'/saves',
            templateUrl: 'templates/save.html',
            controller: "SaveController"
        });
});