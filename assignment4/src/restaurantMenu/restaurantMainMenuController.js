(function () {
'use strict';

angular.module('RestaurantMenu')
.controller('RestaurantMainMenuController', RestaurantMainMenuController);


RestaurantMainMenuController.$inject = ['RestaurantMenuService', 'items'];
function RestaurantMainMenuController(RestaurantMenuService, items) {
  var menu = this;
  menu.categories = items;
}

})();