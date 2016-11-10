( function () {

	'use strict';

	angular.module ('LunchCheck', [])
	.controller ('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope) {

		$scope.menuPlaceHolder ="list comma separated dishes you usually have for lunch";
		$scope.btnText ="Check if too much";
		$scope.menu ="";
		$scope.message = "";

		function countMenuItems () {
			var menuString = $scope.menu;
			var menuItemCount = 0;
			console.log (menuString);

			var separator = /\s*,\s*/;
			var menuItems = menuString.split(separator);

			//console.log (menuItems, menuItems.length);

			for (var i=0; i < menuItems.length; i++) {
				if (menuItems[i].trim()) {
					console.log(menuItems[i]);
					++menuItemCount;
				}
			}

			//console.log (menuItemCount);
			
			return menuItemCount;
		};

		$scope.checkMenuCount = function () {

			var count = countMenuItems();
			//console.log(count);
			var outputString = "";

			if (count > 0 ) {
				if (count < 4 ) {
					outputString = "Enjoy!";
				} else {
					outputString = "Too Much!";
				}
			} else {
				outputString = "Please enter data first"
			}
			$scope.message = outputString;
		};

	};

})();