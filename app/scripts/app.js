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
            .when('/evenement', {
              templateUrl: 'views/evenement.html',
              controller: 'EvenementCtrl',
              controllerAs: 'evenement'
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
            .when('/projet/aquaponie-uqam', {
                templateUrl: 'views/projets/aquaponie-uqam.html'
            })
            .when('/projet/bac-terreau-double-fond', {
                templateUrl: 'views/projets/bac-terreau-double-fond.html'
            })
            .when('/projet/batiment-7', {
                templateUrl: 'views/projets/batiment-7.html'
            })
            .when('/projet/culture-algue', {
                templateUrl: 'views/projets/culture-algue.html'
            })
            .when('/projet/eau-gestion-energetique', {
                templateUrl: 'views/projets/eau-gestion-energetique.html'
            })
            .when('/projet/greb', {
                templateUrl: 'views/projets/greb.html'
            })
            .when('/projet/mur-solaire', {
                templateUrl: 'views/projets/mur-solaire.html'
            })
            .when('/projet/perou-2016', {
                templateUrl: 'views/projets/perou-2016.html'
            })
            .when('/projet/perou-2017', {
                templateUrl: 'views/projets/perou-2017.html'
            })
            .when('/projet/systeme-hydroponique', {
                templateUrl: 'views/projets/systeme-hydroponique.html'
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
