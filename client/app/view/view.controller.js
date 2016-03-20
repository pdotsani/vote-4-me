'use strict';
(function(){

class ViewComponent {
  constructor(Auth, poll, toaster) {
    this.poll = poll;
    this.auth = Auth;
    this.user = Auth.getCurrentUser();
    this.polls = poll.getMine({id: Auth.getCurrentUser()._id});
    this.toaster = toaster;
  }

  deletePoll(aPoll) {
  	this.poll.remove({id: aPoll._id}, 
      function() {
        this.polls = this.poll
          .getMine({id: this.auth.getCurrentUser()._id});
    }.bind(this));
  } 
}

angular.module('appApp')
  .component('view', {
    templateUrl: 'app/view/view.html',
    controller: ViewComponent
  });

})();
