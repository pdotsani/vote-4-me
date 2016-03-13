'use strict';
(function(){

class ViewComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('appApp')
  .component('view', {
    templateUrl: 'app/view/view.html',
    controller: ViewComponent
  });

})();
