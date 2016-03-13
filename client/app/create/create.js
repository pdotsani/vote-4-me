'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/create',
        template: '<create></create>'
      });
  });
