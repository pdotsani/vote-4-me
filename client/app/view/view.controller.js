'use strict';
(function(){

class ViewComponent {
  constructor(Auth, poll, toaster) {
    this.user = Auth.getCurrentUser();
    this.polls = poll.getMine({id: Auth.getCurrentUser()._id});
    this.toaster = toaster;
  }

  deletePoll(poll) {
  	this.toaster
      .pop('warning',
    		poll.question + ' has been deleted...',
    		3000
    	);
  	poll.delete({id: poll._id});
    this.polls = poll.getMine({id: Auth.getCurrentUser()._id});
  } 
}

angular.module('appApp')
  .component('view', {
    templateUrl: 'app/view/view.html',
    controller: ViewComponent
  });

})();
