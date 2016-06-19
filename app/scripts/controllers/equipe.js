'use strict';

/**
 * @ngdoc function
 * @name serreetsApp.controller:EquipeCtrl
 * @description
 * # EquipeCtrl
 * Controller of the serreetsApp
 */
angular.module('serreetsApp')

.controller('EquipeCtrl', function ($scope, $http) {
    $http.get("data/membres.json").success(function (response) {
        $scope.membres = response.membres;

    });
})