'use strict';

angular.module('appApp', [
  'appApp.auth',
  'appApp.admin',
  'appApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'toaster',
  'ngAnimate',
  'angular-clipboard'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
