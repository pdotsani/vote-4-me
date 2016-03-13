'use strict';
(function(){

class ViewPollComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('appApp')
  .component('viewPoll', {
    templateUrl: 'app/view-poll/view-poll.html',
    controller: ViewPollComponent
  });

})();
