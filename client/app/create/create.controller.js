'use strict';
(function(){

class CreateComponent {
  constructor($http, toaster, poll) {
  	this.$http = $http;
    this.toaster = toaster;
    this.poll = poll;
    this.question = '';
    this.form = document.getElementById('create')
    this.answers = [{response:'', count:0},
      {response:'', count:0},
      {response:'', count:0}];
  }

  resetVars() {
    this.answers = [{response:'', count:0},
      {response:'', count:0},
      {response:'', count:0}]; 
    this.question = '';
  }

  resetFields() {
  	this.resetVars();
  	this.toaster
  		.pop('info', 
  			'Form Reset', 
  			 this.answers.length + ' responses in cue...', 
  			3000);
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

  createPoll() {
    console.log('form', this.form);
    console.log('question', this.question);
    console.log('answers', this.answers);
    // this.resetVars();
    if(this.form.$valid) {
      this.poll.create({},{
        question: this.question,
        responses: this.answers
      }, function(data) {
        console.log('success', data);
        this.resetVars();
        this.toaster
          .pop('success', 
            "Poll Created!", 
            this.pollData.question, 
            3000);
      }, function(err) {
          console.warn('error', err);
          this.resetVars();
          this.toaster
              .pop('error', 
                'Poll create failed...', 
                err, 
                3000);
      });
    } else {
      this.toaster
        .pop('error',
          'Form is incomplete',
          'try again!',
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
