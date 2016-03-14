'use strict';
(function(){

class ViewComponent {
  constructor(Auth) {
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('appApp')
  .component('view', {
    templateUrl: 'app/view/view.html',
    controller: ViewComponent
  });

})();
