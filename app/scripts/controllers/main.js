'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MainCtrl', function ($scope/*, $mdSidenav*/) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
   
  })
.controller('IndexCtrl', function ($scope/*, $timeout*/, $mdSidenav/*, $log*/) {
    
    $scope.open = function () {
      $mdSidenav('left').open()
        .then(function () {
          
        });
    };
    
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          
        });
    };
  });