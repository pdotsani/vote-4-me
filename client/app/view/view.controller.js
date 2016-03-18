'use strict';
(function(){

class ViewComponent {
  constructor(Auth, poll, toaster) {
    this.getCurrentUser = Auth.getCurrentUser;
    this.poll = poll;
    this.polls = poll.getMine();
    this.toaster = toaster;
  }

  deletePoll(poll) {
  	this.toaster
      .pop('warning',
    		poll.question + ' has been deleted...',
    		3000
    	);
  	poll.delete({_id: poll._id});
  } 
}

angular.module('appApp')
  .component('view', {
    templateUrl: 'app/view/view.html',
    controller: ViewComponent
  });

})();
