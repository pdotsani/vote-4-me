'use strict';

angular.module('appApp')
  .directive('response', function () {
    return {
      templateUrl: 'app/view-poll/response/response.html',
      restrict: 'E'/*A',*/
      // link: function (scope, element, attrs) {
      // }
    };
  });
