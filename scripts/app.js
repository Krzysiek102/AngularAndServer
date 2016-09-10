angular.module("myApp", ["ngRoute"])
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../pages/main.html"
    })
    .when("/red", {
        templateUrl : "../pages/red.html"
    })
    .when("/green", {
        templateUrl : "../pages/green.html"
    })
    .when("/blue", {
        templateUrl : "../pages/blue.html"
    });
});