var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/spacing_view', {
          templateUrl: '/views/spacing_view.html',
          controller: 'SpacingController',
          controllerAs: 'sc'
        })
        .when ('/wrap_view', {
            templateUrl: '/views/wrap_view.html',
            controller: 'WrapController',
            controllerAs: 'wc'
        })
        .when ('/input_view', {
            templateUrl: '/views/input_view.html',
            controller: 'InputController',
            controllerAs: 'ic'
        })
        .otherwise ( {
            redirectTo: '/spacing_view'
        });
}]);
