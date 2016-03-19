'use strict';
(function(){

class ViewPollComponent {
  constructor(Auth, poll, $location, $state, clipboard) {
  	this.isLoggedIn = Auth.isLoggedIn();
    this.poll = poll;
    this.clipboard = clipboard;
    this.myPoll = poll.getOne({id: $state.params.id});
    this.voted = false;
    this.copiedLink = false;
    this.loc = $location.$$absUrl;
    this.pollId = $location.$$path.match(/[^a-z-\/](.*$)/)[0];
  }

  vote() {
    // insert Get route
    console.log(this.myVote);
    // console.log(clicked);
    if(this.myVote) {
      this.poll.vote({
        id: this.pollId, 
        vote: this.myVote}, 
          function(data) {
            console.log('success!', data)
            this.voted = true;
          }.bind(this), function(err) {
            console.warn(err);
          });
    }
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
