(function () {
'use strict';

angular.module('assignment2', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.service('ShoppingListService', ShoppingListService);

// LIST #1 - controller
ShoppingListController1.$inject = ['ShoppingListService'];
function ShoppingListController1(ShoppingListService) {
  var list1 = this;

  list1.itemName = "";
  list1.itemQuantity = "";

  ShoppingListService.addItem("cookies","10");
  ShoppingListService.addItem("chips","2");
  ShoppingListService.addItem("water","1");
  ShoppingListService.addItem("bread","2");
  ShoppingListService.addItem("oranges","5");
  ShoppingListService.addItem("soda","3");
  
  list1.items = ShoppingListService.getItems();

  list1.addItem = function () {
    ShoppingListService.addItem(list1.itemName, list1.itemQuantity);
  }

  list1.removeItem = function (itemIndex) {
    ShoppingListService.addBoughtItem(list1.items[itemIndex].name, list1.items[itemIndex].quantity);
    ShoppingListService.removeItem(itemIndex);
  };

  list1.getItems = function () {
    return list1.items;
  };

  list1.isEmpty = function(){
    return list1.items.length==0;
  };
}

// LIST #2 - controller
ShoppingListController2.$inject = ['ShoppingListService'];
function ShoppingListController2(ShoppingListService) {
  var list2 = this;

  list2.items = ShoppingListService.getBoughtItems();

  list2.getItems = function () {
    return list2.items;
  };

  list2.isEmpty = function(){
    return list2.items.length==0;
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [];
  var boughtItems = [];

  service.addItem = function (itemName, quantity) {    
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
  };

  service.addBoughtItem = function (itemName, quantity) {    
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtItems.push(item);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}


function ShoppingListFactory() {
  var factory = function () {
    return new ShoppingListService();
  };
  return factory;
}

})();
