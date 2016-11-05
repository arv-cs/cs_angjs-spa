(function () {

angular.module('private')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;
  $ctrl.menuItemFound = true;
  
  $ctrl.submit = function () {
    $ctrl.completed = true;
    
    var promise = MenuService.getMenuItem($ctrl.user.shortname);
    promise.then(function (response) {
      $ctrl.menuItem = response;
      if(!$ctrl.menuItem){
        $ctrl.menuItemFound = false;
          $ctrl.message="Not Registered: Menu Item Not Found";
        }else{
          $ctrl.menuItemFound = true;
          $ctrl.message="Information saved";
          MenuService.setUserInfo($ctrl.menuItem);
      }
    })
    .catch(function (error) {
      $ctrl.menuItemFound = false;
      $ctrl.message="Not Registered: Menu Item Not Found";
    });

  };
}

})();
