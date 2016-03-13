'use strict';
(function(){

class CreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('appApp')
  .component('create', {
    templateUrl: 'app/create/create.html',
    controller: CreateComponent
  });

})();
