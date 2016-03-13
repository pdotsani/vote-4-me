'use strict';
(function(){

class DashboardComponent {
  constructor(Auth) {
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('appApp')
  .component('dashboard', {
    templateUrl: 'app/dashboard/dashboard.html',
    controller: DashboardComponent
  });

})();
