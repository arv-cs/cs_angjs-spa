(function () {
'use strict';

angular.module('RestaurantMenu')
.component('categoryMenu', {
  templateUrl: 'src/restaurantMenu/templates/categorymenu.template.html',
  bindings: {
    items: '<'
  }
});

})();