'use strict';

/**
 * @ngdoc function
 * @name layoutdummyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the layoutdummyApp
 */
angular.module('layoutdummyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
