'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
      	authenticate: true,
        url: '/create',
        template: '<create></create>'
      });
  });
