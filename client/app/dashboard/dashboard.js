'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
      	authenticate: true,
        url: '/dashboard',
        template: '<dashboard></dashboard>'
      });
  });
