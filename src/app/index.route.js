(function() {
  'use strict';

  angular
    .module('myApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Directive', {
        templateUrl: 'app/main/MainDirective.html',
        controller: 'DirectivesCtrl',
        controllerAs: 'dir'
      })
      .when('/Services', {
        templateUrl: 'app/main/myService.html',
        controller: 'ServiceCtrl'
      })
      .when('/Filters', {
          templateUrl: 'app/main/Filters.html',
          controller: 'FilterCtrl'
      })
      .when('/Form',{
          controller: 'FormCtrl',
          templateUrl: 'app/main/Form.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
