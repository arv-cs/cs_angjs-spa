(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', testCtrl)

/*.controller('MyFirstController', ['$scope', function($scope){
	$scope.name = "test";
}])*/

.controller('NameCalculator', function ($scope) {
	$scope.name = "";
	$scope.totalValue = 0;
	
	$scope.displayNumeric = function(){
		var totalNameValue = calculatNumericForString($scope.name);
    	$scope.totalValue = totalNameValue;
	};

	function calculatNumericForString(string) {
	    var totalStringValue = 0;
	    for (var i = 0; i < string.length; i++) {
	      totalStringValue += string.charCodeAt(i);
	    }
    	return totalStringValue;
  	}
});

//protects from minification
testCtrl.$inject = [$scope];

function testCtrl ($scope) {
	$scope.name = "test";

	$scope.sayMessage = function(){
		return "say good luck";
	};
};


})();