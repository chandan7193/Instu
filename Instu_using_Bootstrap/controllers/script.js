
    var app = angular.module('myApp', ['ngRoute']);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })

            // route for the search page
            .when('/search', {
                templateUrl : 'views/search.html',
                controller  : 'searchController'
            })

            // route for the messgae page
            .when('/message', {
                templateUrl : 'views/message.html',
                controller  : 'messageController'
            })

            // route for the alert page
            .when('/alert', {
                templateUrl : 'views/alert.html',
                controller  : 'alertController'
            })

            // route for the contact page
            .when('/profile', {
                templateUrl : 'views/profile.html',
                controller  : 'profileController'
            });

    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope,$http) {
        // create a message to display in our view
        
        $http.get('data.js').success(function(response){
            $scope.myData = response;
          
        

        });

 
    });

    app.controller('searchController', function($scope) {
        $scope.message = 'Look! I am an search page.';
    });

    app.controller('messageController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a messgae.';
    });

     app.controller('alertController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a alert.';
    });

      
      app.controller('profileController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a contact.';
    });



   