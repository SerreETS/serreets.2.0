'use strict';

/**
 * @ngdoc overview
 * @name serreetsApp
 * @description
 * # serreetsApp
 *
 * Main module of the application.
 */
var app = angular
        .module('serreetsApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ])

app.config(function ($routeProvider) {
    

    $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/projet', {
                templateUrl: 'views/projet.html',
                controller: 'ProjetCtrl',
                controllerAs: 'projet'
            })
            .when('/equipe', {
                templateUrl: 'views/equipe.html',
                controller: 'EquipeCtrl',
                controllerAs: 'equipe'
            })
            .when('/recrutement', {
                templateUrl: 'views/recrutement.html',
                controller: 'RecrutementCtrl',
                controllerAs: 'recrutement'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })
            .when('/projet/projeta', {
                templateUrl: 'views/projets/projeta.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

app.directive('isActiveNav', [ '$location', function($location) {
return {
 restrict: 'A',
 link: function(scope, element) {
   scope.location = $location;
   scope.$watch('location.path()', function(currentPath) {
     if('/#' + currentPath === element[0].attributes['href'].nodeValue) {
       element.parent().addClass('active');
     } else {
       element.parent().removeClass('active');
     }
   });
 }
 };
}]);

