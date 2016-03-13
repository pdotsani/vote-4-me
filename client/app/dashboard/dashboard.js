'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
      	controllerAs: 'dash',
      	authenticate: true,
        url: '/dashboard',
        template: '<dashboard></dashboard>'
      });
  });
