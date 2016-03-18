'use strict';
(function(){

class ViewPollComponent {
  constructor(Auth, poll, $state, toaster) {
  	this.isLoggedIn = Auth.isLoggedIn();
    this.myPoll = poll.getOne({id: $state.params.id});
    this.toaster = toaster;
    this.voted = false;
  }

  vote() {
  	this.toaster
  		.pop('success',
  			'Thanks for voting!',
  			3000);
  	this.voted = true;
  }
}

angular.module('appApp')
  .component('viewPoll', {
    templateUrl: 'app/view-poll/view-poll.html',
    controller: ViewPollComponent
  });

})();
