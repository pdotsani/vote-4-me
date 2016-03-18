'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view-poll', {
        url: '/view-poll/:id',
        params: {
        	id: {
        		squash: true
        	}
        },
        template: '<view-poll></view-poll>'
      });
  });
