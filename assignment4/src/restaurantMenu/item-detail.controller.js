(function () {
'use strict';

angular.module('RestaurantMenu')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['RestaurantMenuService', 'items'];
function ItemDetailController(RestaurantMenuService, items) {
  var itemDetail = this;
  itemDetail.menus  = items.menu_items;
}

})();
