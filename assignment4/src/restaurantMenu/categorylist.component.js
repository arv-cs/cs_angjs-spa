(function () {
'use strict';

angular.module('RestaurantMenu')
.component('categoryList', {
  templateUrl: 'src/restaurantMenu/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();