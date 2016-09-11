(function () {
'use strict';

angular.module('assignment1', [])

.controller('LunchCheckController', lunchCtrl);

/*.controller('MyFirstController', ['$scope', function($scope){
	$scope.name = "test";
}])*/


//protects from minification
lunchCtrl.$inject = [$scope];

function lunchCtrl ($scope) {
	$scope.lunch = "";
	$scope.message = "";

	$scope.checkLunch = function(){
		var lunchInput = $scope.lunch;
		var array = lunchInput.split(',');

		$scope.messageStyle={color : 'green'};
		$scope.iBorderStyle={"border-color" : 'green'};
		//lunchInput.trim().length === 0
		if(!lunchInput.trim()){
			$scope.message = "Please enter data first";
			$scope.messageStyle={color : 'red'};
			$scope.iBorderStyle={"border-color" : 'red'};
		}else if(array.length > 3){
			$scope.message = "Too Much!";
		}else{
			$scope.message = "Enjoy " + $scope.lunch;
		}
	};
};


})();