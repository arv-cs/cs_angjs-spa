(function () {
'use strict';

angular.module('MenuSearchApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('listItem', ListItem)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

function ListItem() {
  //ddo: directive definiiton object
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.html',
    scope: {
        items: '<',
        errormessage:'<',
        onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,    
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function NarrowItDownDirectiveController(){
  var list =  this;
  list.isEmpty = function(){
    return list.items.length==0;
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.menuSearchText="";
  menu.menuFindIems=[];
  menu.errormessage="";

  menu.searchMenuItems = function(){
    var promise = MenuSearchService.getMatchedMenuItems(menu.menuSearchText);
    promise.then(function (response) {
      menu.menuFindIems = response;
      if(menu.menuFindIems.length==0){
          menu.errormessage="NothingFound";
        }else{
          menu.errormessage="";
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
      menu.errormessage="Something went terribly wrong.";
    });
  };

  menu.logMenuItems = function (shortName) {
    var promise = MenuSearchService.getMenuForCategory(shortName);

    promise.then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  menu.removeItem = function (itemIndex) {
    menu.menuFindIems.splice(itemIndex, 1);
  };

  menu.isEmpty = function(){
    return menu.menuFindIems.length==0;
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };

  service.getMatchedMenuItems = function(searchTerm){
    
    var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function (result){
        var data = result.data;
          var menuFindIems = [];
          for (var x in data) {
            var category  = data[x];        
            if(category.name.toLowerCase().indexOf(searchTerm.toLowerCase())>=0){
              menuFindIems.push(category);
            }            
          }
        return menuFindIems;
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
    });

    return response;
  };
}

})();
