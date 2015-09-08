(function () {
  'use strict';
  angular
      .module('myApp')
      .factory('myService', ['$http', function($http){
          return $http.get('assets/photos.json')
             .success(function(data) {
               return data;
             })
             .error(function(data) {
               return data;
             });
    }]);

})();
