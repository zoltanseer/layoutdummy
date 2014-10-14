'use strict';

/**
 * @ngdoc function
 * @name layoutdummyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the layoutdummyApp
 */
angular.module('layoutdummyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
