(function(){

	'use stict';

	angular.module('DIApp', [])
	.controller ('DIController', DIController);

	function DIController ($scope, $filter) {
		$scope.name = "anupam";
	};

})();