'use strict';

angular.module('appApp')
  .service('poll', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return $resource('/api/polls/:id/:controller', {
  	  id: '@_id'
  	}, {

  	  getAll: {
  	    method: 'GET',
  	    isArray: true
  	  },

      getMine: {
        method: 'GET',
        isArray: true,
        controller: 'myPolls'
      },

  	  create: {
  	    method: 'POST'
  	  },
  	  
  	  remove: {
  	    method: 'DELETE'
  	  }
  	});
  });
