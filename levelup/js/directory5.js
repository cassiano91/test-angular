angular.module('directoryApp', [])
.controller('directoryController', function($scope){
	$scope.list = [
		{
			name : 'Scoot',
			age : 29
		}, {
			name : 'Courtney', age : 29
		}, {
			name : 'Ross', age : 31
		}, {
			name : 'Ben', age : 32
		}
	];

	$scope.addPerson = function() {
		$scope.list.push({name : $scope.name, age : $scope.age});

		$scope.name = "";
		$scope.age  = 0;
	};
});
