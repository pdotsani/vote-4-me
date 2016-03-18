'use strict';

angular.module('appApp')
  .directive('viewInfo', function () {
    return {
      templateUrl: 'app/view/view-info/view-info.html',
      restrict: 'E'/*A',*/
      // link: function (scope, element, attrs) {
      // }
    };
  });
