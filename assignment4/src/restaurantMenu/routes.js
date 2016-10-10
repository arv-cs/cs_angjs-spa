(function () {
'use strict';

angular.module('RestaurantMenu')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurantMenu/templates/home.template.html'
  })

  //categories
  .state('mainMenu', {
    url: '/main-menu',
    templateUrl: 'src/restaurantMenu/templates/main-restaurantMenu.template.html',
    controller: 'RestaurantMainMenuController as menu',
    resolve: {
      items: ['RestaurantMenuService', function (RestaurantMenuService) {
        return RestaurantMenuService.getMenuCategories();
      }]
    }
  }) 

  // Item detail
  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/restaurantMenu/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
      itemId: null
    },
    resolve: {
      items: ['RestaurantMenuService', '$stateParams', function (RestaurantMenuService, $stateParams) {
        return RestaurantMenuService.getMenuForCategory($stateParams.itemId);
      }]
    }
  });

}

})();
