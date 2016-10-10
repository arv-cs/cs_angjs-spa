(function () {
'use strict';

angular.module('data')
.service('RestaurantMenuService', RestaurantMenuService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


RestaurantMenuService.$inject = ['$http', 'ApiBasePath']
function RestaurantMenuService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    })
    .then(function (result){
        var data = result.data;
        return data;
    });
    return response;
  };

  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    })
    .then(function (result){
        var data = result.data;
        return data;
    });
    return response;
  };
}

})();