'use strict';
(function(){

class CreateComponent {
  constructor($http, toaster, poll, Auth) {
  	this.$http = $http;
    this.auth = Auth;
    this.toaster = toaster;
    this.poll = poll;
    this.question = '';
    this.answers = [{response:'', count:0},
      {response:'', count:0},
      {response:'', count:0}];
    this.resetVars = function() {
      this.answers = [{response:'', count:0},
        {response:'', count:0},
        {response:'', count:0}]; 
      this.question = '';
    };
  }

  addAnswer() {
  	this.answers.push({
  		response: '',
  		count: 0
  	});
		this.toaster
			.pop('info', 
				'Question Added', 
				 this.answers.length + ' responses in cue...', 
				3000);
  }

  resetFields() {
    this.resetVars();
    this.toaster
      .pop('info', 
        'Form Reset', 
         this.answers.length + ' responses in cue...', 
        3000);
  }

  createPoll(form) {
    // Possible refactoring, using call or apply?
    var checkResponses = function(arr) {
      var count = arr.length;
      arr.forEach(function(el, i) {
        if(el.response === '') count--;
      });
      console.log('count: ', count);
      return count >= 3 ? true : false;
    };
    // Possible refactoring, using call or apply?
    var clearBlankFields = function(arr) {
      for(var i = arr.length-1; i >= 0; i--) {
        if(arr[i].response === '') arr.slice(-1,1);
      };
      return arr;
    };

    if(form.$valid && checkResponses(this.answers)) {
      this.answers = clearBlankFields(this.answers);

      var promise = this.poll.create({
        owner: this.auth.getCurrentUser()._id,
        question: this.question,
        responses: this.answers
      }).$promise;
      promise
        .then(function(poll) {
          this.toaster
            .pop('success', 
              "Poll Created!", 
              poll.question, 
              3000);
          this.resetVars();
        }.bind(this))
        .catch(function(err) {
          this.toaster
            .pop('error', 
              'Poll create failed...', 
              err, 
              3000);
        }.bind(this));
    } else {
      this.toaster
        .pop('error',
          'Form is incomplete',
          'sorry!',
          3000);
    }
  }
}

angular.module('appApp')
  .component('create', {
    templateUrl: 'app/create/create.html',
    controller: CreateComponent
  });

})();
