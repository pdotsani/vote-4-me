'use strict';
(function(){

class CreateComponent {
  constructor($http) {
  	this.$http = $http;
    this.pollData = {};
  }

  createPoll() {
  	$http.post('api/posts/',this.pollData)
  		.success(function(data) {
  			console.log('success', data);

  		}).catch(function(err) {
  			console.warn(err);
  		});
  }
}

angular.module('appApp')
  .component('create', {
    templateUrl: 'app/create/create.html',
    controller: CreateComponent
  });

})();
