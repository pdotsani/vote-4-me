'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view-poll', {
        url: '/view-poll',
        template: '<view-poll></view-poll>'
      });
  });
