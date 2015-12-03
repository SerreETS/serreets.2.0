// js/script.js
'use strict';

/**
 * Déclaration de l'application ecommerceApp
 */
var app = angular.module('serreETSApp', [
    'ngRoute',
    'ui.bootstrap',
    function ($httpProvider) {
    }
]);

/**
 * Routage
 */
app.config(function ($routeProvider) {
    $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html'
            })
            .when('/productDetail/:id?', {
                templateUrl: 'partials/product-details.html',
            })
            .otherwise({
                redirectTo: 'home'
            });
});


/*app.controller('contactUs', ['$scope', '$http', '$routeParams', '$route',
 function ($scope, $http, $routeParams, $route) {
 console.info("asdasdasdasd");
 $scope.submit = function () {
 
 var form = $scope.form;
 $http({
 cache: false,
 method: 'POST',
 url: serverBackEnd + '/mail/',
 data: form,
 headers: {'Content-Type': 'application/json'}
 }).then(function successCallback(results) {
 // this callback will be called asynchronously
 // when the response is available
 $scope.confirm = "Email was sent! We will get back to you, as soon as possible.";
 }, function errorCallback(results) {
 // called asynchronously if an error occurs
 // or server returns response with an error status.
 //$scope.product = [{'name': "as"}, {'name':"failed2"}];
 $route.reload();
 });
 
 }
 }
 ]);*/


/**
 * Contrôleur Carousel
 */
/*app.controller('CarouselDemoCtrl', function ($scope) {
 $scope.myInterval = 10000;
 $scope.noWrapSlides = false;
 
 var slides = $scope.slides = [];
 $scope.addSlide = function () {
 var newWidth = 0 + slides.length + 1;
 slides.push({
 image: 'web/img/home/slide_' + newWidth + '.jpg',
 text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
 ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
 });
 };
 for (var i = 0; i < 3; i++) {
 $scope.addSlide();
 }
 });*/

/**
 * Affiche page actuelle
 */
app.run(function ($rootScope, $location, $window) {
    var landingUrl = $window.location.href;
    console.log(landingUrl);
    $rootScope.url = landingUrl;
});






var $scope, $location;

app.service('anchorSmoothScroll', function () {

    this.scrollTo = function (eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset)
                return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop)
                return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }

    };

});

app.controller('ScrollCtrl', function ($scope, $location, anchorSmoothScroll) {

    $scope.gotoElement = function (eID) {


        // call $anchorScroll()
        anchorSmoothScroll.scrollTo(eID);

    };
});


app.controller('memberCtrl', function ($scope, $http) {
    $http.get("data/membres.json")
            .success(function (response) {
                $scope.member = response;
            });
})
