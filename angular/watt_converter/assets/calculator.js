/* JavaScript Document */
//Sep 21, 2018  -  Entered comments.
(function(){

	//This line must be coordinated with ng-app from index.html.
	var app = angular.module('myCalculator', []);

	//This line must be coordinated with ng-controller from index.html.
	app.controller('CalculatorController', ['$scope', function($scope){

		//Select option values Lumen Brightness come from here.
		$scope.lumen_options = [375, 600, 900, 1125, 1600];
		//Lumen default value
		$scope.current_lumens = 600;

		//KiloWatt default value
		$scope.current_cost  = 12;
		//Total hours spent per day default value.
		$scope.current_hours = 3;
		
		$scope.total_days    = 365;

		//Decimal conversion rate.
		$scope.inc_conversion = .0625;
		$scope.hal_conversion = .0450;
		$scope.cfl_conversion = .0146;
		$scope.led_conversion = .0125;

		//The magic of angular is double binding.
		//As soon as the input changes, the output is calculated and displays the output
		//right away.
		$scope.calculate = function(){

			//Wattage is calculated and display immediately.
			//current_lumens is an input name declared in index.html.
			$scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
			$scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
			$scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
			$scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);

			//current_hours is an input name declared in index.html.
			if( $scope.current_hours > 24 ){
				$scope.current_hours = 24;
			}

			var total_hours = $scope.total_days * $scope.current_hours;
			//current_cost is an input name declared in index.html.
			var cost = $scope.current_cost / 100;

			//Cost is calculated and displayed immediately.
			$scope.inc_cost = ((($scope.inc_wattage * total_hours)/1000 ) * cost ).toFixed(2);
			$scope.hal_cost = ((($scope.hal_wattage * total_hours)/1000 ) * cost ).toFixed(2);
			$scope.cfl_cost = ((($scope.cfl_wattage * total_hours)/1000 ) * cost ).toFixed(2);
			$scope.led_cost = ((($scope.led_wattage * total_hours)/1000 ) * cost ).toFixed(2);
		}

		//Not sure what is the purpose of this line.
		$scope.calculate();
	}]);

})();
/* Script goes here */