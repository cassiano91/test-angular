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
});
