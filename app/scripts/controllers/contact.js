'use strict';

/**
 * @ngdoc function
 * @name serreetsApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the serreetsApp
 */
angular.module('serreetsApp')

        .controller('ContactCtrl', function ($scope, $http) {
            $scope.options = [
                {
                    name: "Sujet",
                    value: "something-cool-value"
                },
                {
                    name: "Question",
                    value: "something-else-value"
                },
                {
                    name: "Partenariat",
                    value: "something-else-value"
                },
                {
                    name: "Financement",
                    value: "something-else-value"
                },
                {
                    name: "Recrutement",
                    value: "something-else-value"
                }
            ];

            $scope.subject = $scope.options[0];

            $scope.sendContactMail = function () {
                $scope.message = "";

                    var request = $http({
                        method: "post",
                        url: "scripts/controllers/sendMailContact.php",
                        data: {
                            name : $scope.name,
                            email : $scope.email,
                            subject : $scope.subject.name,
                            messageContact: $scope.messageContact
                        },
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    });

                    console.log(request);

                    request.success(function (data) {
                        $scope.message = "Votre message a bien été envoyée. Merci! " + data;
                    });

                    request.error(function (data){
                        $scope.message = "Il y a une erreur dans la soumission du formulaire. ";
                    })

            }

        });
