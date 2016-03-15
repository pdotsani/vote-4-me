'use strict';

angular.module('appApp')
  .service('poll', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return $resource('/api/polls/:id', {
  	  id: '@_id'
  	}, {

  	  getAll: {
  	    method: 'GET',
  	    isArray: true
  	  },

  	  create: {
  	    method: 'POST'
  	  },
  	  
  	  remove: {
  	    method: 'DELETE'
  	  }
  	});
  });
