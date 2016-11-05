(function() {
'use strict';

angular.module('private')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('private', {
      absract: true,
      templateUrl: 'src/private/private.html'
    })
    .state('private.home', {
      url: '/myinfo',
      templateUrl: 'src/private/home/home.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfoCtrl'
    })
    .state('private.signup', {
      url: '/signup',
      templateUrl: 'src/private/home/signup.html',
      controller: 'SignUpController',
      controllerAs: 'signupCtrl'
    });
}
})();
