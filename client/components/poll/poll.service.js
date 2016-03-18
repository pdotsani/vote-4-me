'use strict';

angular.module('appApp')
  .service('poll', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return $resource('/api/polls/:id/:controller', {
  	  id: '@id'
  	}, {

  	  getAll: {
  	    method: 'GET',
  	    isArray: true
  	  },

      getOne: {
        method: 'GET'
      },

      getMine: {
        method: 'GET',
        isArray: true,
        params: {
          controller: 'myPolls'
        }
      },

      vote: {
        method: 'PUT',
        params: {
          controller: 'vote'
        }
      },
      
  	  create: {
  	    method: 'POST'
  	  },
  	  
  	  remove: {
  	    method: 'DELETE'
  	  }
  	});
  });
