(function() {
	var app = angular.module('app', []);

	app.controller('CaixaController', function() {
		var vm = this;

		vm.sacar = function() {
			console.log('oi');
		}
	});

	app.directive('saque', function() {
		return {
			require: 'ngModel',
			controller: function($element) {
				var ctrl = $element.controller('ngModel');
				ctrl.$validators.valor =
					function(modelValue, viewValue) {
						return viewValue && viewValue < 500;
				};
			}
		}
	});

	app.directive('saqueAsync', function($timeout, $q) {
		return {
			require: 'ngModel',
			controller: function($element) {
				var ctrl = $element.controller('ngModel');
				ctrl.$asyncValidators.saqueAsync =
					function(modelValue, viewValue) {
						return $timeout(function() {}, 1800).then(function() {
							var saldoDisponivel = 900;
							if (!viewValue || viewValue > saldoDisponivel) {
								return $q.reject();
							}
							return $q.resolve();
						});
				};
			}
		};
	});
})();