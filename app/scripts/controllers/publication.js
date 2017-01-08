'use strict';

/**
 * @ngdoc function
 * @name serreetsApp.controller:RecrutementCtrl
 * @description
 * # RecrutementCtrl
 * Controller of the serreetsApp
 */
angular.module('serreetsApp')

        .controller('PublicationCtrl', function ($scope) {

          $scope.events = [{
            badgeClass: 'info',
            title: 'Octobre 2016',
            content: 'Lancement du site web de SerreÉTS'
          },
          {
            badgeClass: 'info',
            title: 'Juin 2016',
            content: 'Départ au Pérou de huit membres de SerreÉTS pour le projet de construction de serre passive dans la communauté défavorisé de San Melchor avec le CRÉDIL'
          },
          {
            badgeClass: 'info',
            title: 'Mai 2016',
            content: 'Conférences sur les serres en milieu urbain offertes par Marc-Antoine Meilleur et William Paradis de SerreÉTS en collaboration avec l\'ONG Nourrir la Citoyenneté',
            footerContentHtml: '<a href="https://drive.google.com/file/d/0B8eBUmOfgkLhQ0pxTWJNdUNhZFU/view" target="_blank">Plus d\'informations</a>'
          },
          {
            badgeClass: 'info',
            title: 'Juin 2014',
            content: 'Création du regroupement étudiant SerreÉTS par Joël Gagnon et Marc-Antoine Meilleur'
          }


        ];

        $scope.side = ''


});
