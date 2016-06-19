'use strict';

/**
 * @ngdoc function
 * @name serreetsApp.controller:ProjetCtrl
 * @description
 * # ProjetCtrl
 * Controller of the serreetsApp
 */
angular.module('serreetsApp')

        .controller('ProjetCtrl', function ($scope, $http) {
            $http.get("data/projets.json").success(function (response) {
                $scope.projets = response.projets;
            });
        })
        
        