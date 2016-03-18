'use strict';
(function(){

class ViewPollComponent {
  constructor(Auth, poll, $location, $state, clipboard) {
  	this.isLoggedIn = Auth.isLoggedIn();
    this.myPoll = poll.getOne({id: $state.params.id});
    this.voted = false;
    this.copiedLink = false;
    this.loc = $location.$$absUrl;
    this.clipboard = clipboard;
  }

  vote() {
    // insert Get route
  	this.voted = true;
  }

  copyLink() {
    this.copiedLink = true;
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
