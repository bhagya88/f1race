'use strict';

/**
 * @ngdoc overview
 * @name f1raceApp
 * @description
 * # f1raceApp
 *
 * Main module of the application.
 */
angular.module('f1raceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'f1raceApp.services',
    'f1raceApp.controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/drivers', {
        templateUrl: '/views/drivers.html',
        controller: 'DriverController'
      })
      .when('/teams', {
        templateUrl: '/views/teams.html',
        controller: 'TeamController'
      })
      .when('/races', {
        templateUrl: '/views/races.html',
        controller: 'TeamController'
      })
       .when('/', {
        templateUrl: '/views/drivers.html',
        controller: 'RacesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
