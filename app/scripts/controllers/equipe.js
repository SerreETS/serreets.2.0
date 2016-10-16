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


  $http.get('data/membres.json')
      .success(function(response) {
          $scope.membres = response.membres;
      })
      .error(function(response,status,error,config){
          $scope.contents = [{heading:"Error",description:"Could not load json   data"}];
      });
})
