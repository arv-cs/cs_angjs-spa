(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://arv-cs-angjs-spa.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
