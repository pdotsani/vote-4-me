'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view', {
        url: '/view',
        template: '<view></view>'
      });
  });
