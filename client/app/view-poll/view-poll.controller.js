'use strict';
(function(){

class ViewPollComponent {
  constructor(Auth, poll, toaster, $location, $state, clipboard) {
  	this.isLoggedIn = Auth.isLoggedIn();
    this.myPoll = poll.getOne({id: $state.params.id});
    // fix toaster on this page...
    this.toaster = toaster;
    this.voted = false;
    this.loc = $location.$$absUrl;
    this.clipboard = clipboard;
  }

  vote() {
  	// this.toaster
  	// 	.pop('success',
  	// 		'Thanks for voting!',
   //      'we appreciate you!',
  	// 		3000);
  	this.voted = true;
  }

  copyLink() {
    // this.toaster
    //   .pop('info',
    //     'url copied!',
    //     this.loc,
    //     3000);
    this.clipboard
      .copyText(this.loc);
  }
}

angular.module('appApp')
  .component('viewPoll', {
    templateUrl: 'app/view-poll/view-poll.html',
    controller: ViewPollComponent
  });

})();
