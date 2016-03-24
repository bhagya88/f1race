'use strict';



var ctrlapp = angular.module('f1raceApp.controllers', []);

//DRIVERS CONTROLLER

ctrlapp.controller('DriverController', function ($scope, dataService) {

  $scope.driversList = [];
  $scope.teams = [];
  $scope.races = [];
  $scope.years = ['2015', '2014', '2013', '2012', '2011'];
  $scope.year = '2015';
if( angular.isDefined($scope.year)){
  $scope.$watch('year', function () {
   
    dataService.getDrivers($scope.year).success(function (response) {
      $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
    });
  }
});


//TEAMS CONTROLLER

ctrlapp.controller('TeamController', function ($scope, dataService) {
  $scope.years = ['2015', '2014', '2013', '2012', '2011'];
  $scope.year = '2015';
  if( angular.isDefined($scope.year)){
  $scope.$watch('year', function () {
    dataService.getTeams($scope.year).success(function (response) {
      $scope.teams = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
   });
   });
  }
});


//RACES CONTROLLER
ctrlapp.controller('RacesController', function ($scope, dataService) {
  $scope.years = ['2015', '2014', '2013', '2012', '2011'];
   $scope.year = '2015';
   if( angular.isDefined($scope.year)){
   $scope.$watch('year', function () {
    dataService.getRaces($scope.year).success(function (response) {
      $scope.races = response.MRData.RaceTable.Races;
    });
   });
  }
});

