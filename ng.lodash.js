/*
 *  https://github.com/jiahut/ng.lodash
 *  zhijia,.zhang jiahut@gmail.com
 *
*/

(function (ng, _) {
  'use strict';

  var lodashModule = ng.module('ng.lodash', []);
  
  lodashModule.factory('_', ['$window', function($window) {
    // place lodash include before angular
    return $window._;
  }]);

}(angular, _));
