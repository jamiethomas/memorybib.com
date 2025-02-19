// script.js

    // create the module and name it app
        // also include ngRoute for all our routing needs
    var app = angular.module('app', ['ngRoute', 'firebase']);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('xx/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            // default route to home page
            .otherwise({
              templateUrl : 'pages/home.html',
              controller : 'mainController'
            });
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope, $firebaseArray) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $scope.name = "";

        var ref = new Firebase("https://vivid-inferno-2726.firebaseio.com");

        // create a synchronized array
        // click on `index.html` above to see it used in the DOM!
        $scope.names = $firebaseArray(ref);

        // add new items to the array
        // the message is automatically added to our Firebase database!
        $scope.addMessage = function() {
          $scope.names.$add({
            text: $scope.name
          });
        };

        $scope.removeMessage = function(name) {
          $scope.names.$remove(name);
        };

    });

    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
