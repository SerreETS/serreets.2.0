'use strict';

/**
 * @ngdoc function
 * @name serreetsApp.controller:RecrutementCtrl
 * @description
 * # RecrutementCtrl
 * Controller of the serreetsApp
 */
angular.module('serreetsApp')

        .controller('RecrutementCtrl', function ($scope, $http) {
            $scope.options = [
                {
                    name: "Programme d'études",
                    value: "something-cool-value"
                },
                {
                    name: "Génie construction",
                    value: "something-else-value"
                },
                {
                    name: "Génie mécanique",
                    value: "something-else-value"
                },
                {
                    name: "Génie électrique",
                    value: "something-else-value"
                },
                {
                    name: "Génie production automatisée",
                    value: "something-else-value"
                },
                {
                    name: "Génie gestion des opérations",
                    value: "something-else-value"
                },
                {
                    name: "Génie logiciel",
                    value: "something-else-value"
                },
                {
                    name: "Génie technologie de l'information",
                    value: "something-else-value"
                }

            ];

            $scope.program = $scope.options[0];

            $scope.sendRecrutementMail = function () {

                
                $scope.message = "";
     


                    var request = $http({
                        method: "post",
                        url: "scripts/controllers/sendMail.php",
                        data: {
                            firstName : $scope.firstName,
                            lastName : $scope.lastName,
                            program : $scope.program.name,
                            email: $scope.email,
                            messageEmail: $scope.messageEnlisting
                        },
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    });

                    request.success(function (data) {
                        $scope.message = "Votre message a bien été envoyée. Merci! " + data;
                    });
                    
                    request.error(function (data){
                        $scope.message = "Il y a une erreur dans la soumission du formulaire. ";
                    })

            }

        });




