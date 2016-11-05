(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.registered = false;
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (menuItem) {
    var config = {};    

    return $http.get(ApiPath + '/menu_items/' +menuItem+'.json').then(function (response) {
      return response.data;
    });
  };

  service.setUserInfo = function(menuItem){
      service.menuItem = menuItem;
      service.registered = true;
  };

}

})();
