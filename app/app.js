(function() {
    'use strict';

    var app = angular.module('app', ['ui.router']);

    app.config(function( $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/home',
            templateUrl: '../partials/partial-home.html'
        })

        // MULTIPLE ADDITIONAL STATES AND NESTED VIEWS =========================
        .state('about', {
                url: '/about',
                templateUrl: '../partials/partial-about.html',
                controller: 'NavController',
                controllerAs: 'vm'
            })
        .state('faq', {
            url: '/faq',
            templateUrl: '../partials/partial-faq.html',
            controller: 'NavController',
            controllerAs: 'vm'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '../partials/partial-contact.html',
            controller: 'NavController',
            controllerAs: 'vm'
        })

    });
    
})();
