(function () {

angular.module('private')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath'];

function MyInfoController(MenuService, ApiPath){
	var $ctrl = this;
	$ctrl.basePath = ApiPath;
	$ctrl.registered=MenuService.registered;
	$ctrl.menuItem=MenuService.menuItem;
}

})();
