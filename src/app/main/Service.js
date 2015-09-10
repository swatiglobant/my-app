(function () {
  'use strict';
  angular
      .module('myApp')
      .service('myService', ['$q', '$http', function($q, $http){
          var deferred = $q.defer();
          this.getData = function () {
              return $http.get('assets/photos.json')
                .success(function(response) {
                    //console.log(response);
                    deferred.resolve(response);
                    return deferred.promise;
                }).error(function(response) {
                    deferred.reject(response);
                    return deferred.promise;
                });
            };
    }]);
})();
