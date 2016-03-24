'use strict';

/* Services 

angular.module('f1raceApp.dataServices', [])
.factory('dataService', function($http){
var data={};
data.getDrivers=function(){
 return $http({
      	method: 'JSONP', 
      	url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    };
	   return data;
  });*/


angular.module('f1raceApp.services', [])
  .factory('dataService', function ($http) {

    var data = {}; 
 
    
   
    data.getDrivers = function (year) {
      var dataUrl; 
      dataUrl= 'http://ergast.com/api/f1/'+ year +'/driverStandings.json?callback=JSON_CALLBACK';
        return $http({
        method: 'JSONP',
        url: dataUrl
      });
    };
   
    data.getTeams = function(year) {
      var dataUrl; 
      dataUrl= 'http://ergast.com/api/f1/'+ year +'/constructorStandings.json?callback=JSON_CALLBACK';
      return $http({
        method: 'JSONP', 
        url: dataUrl
      });
    
    };
    
   data.getRaces = function(year) {
      var dataUrl; 
      dataUrl= 'http://ergast.com/api/f1/'+ year +'.json?callback=JSON_CALLBACK';
      return $http({
        method: 'JSONP', 
        url: dataUrl
      });
    };

    
    return data;
  });