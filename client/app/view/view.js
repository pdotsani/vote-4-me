'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view', {
      	authenticate: true,
        url: '/view',
        template: '<view></view>'
      });
  });
