'use strict';

class NavbarController {


  constructor(Auth) {
	  this.isCollapsed = true;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('appApp')
  .controller('NavbarController', NavbarController);
