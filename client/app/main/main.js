'use strict';

angular.module('appApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        authenticate: false,
        template: '<main></main>'
      });
  });
