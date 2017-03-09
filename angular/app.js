angular.module('LoadingBarExample', ['chieffancypants.loadingBar', 'ngAnimate'])
	.config(function(cfpLoadingBarProvider) {
console.log(1);
		cfpLoadingBarProvider.includeSpinner = true;
	})

	.controller('ExampleCtrl', function ($scope, $http, $timeout, cfpLoadingBar) {
console.log(2);
		$scope.posts      = [];
		$scope.section    = null;
		$scope.subreddit  = null;
		$scope.subreddits = ['cats', 'pics', 'funny', 'gaming', 'AdviceAnimals', 'aww'];

		var getRandomSubreddit = function() {
console.log(3);
			var sub = $scope.subreddits[Math.floor(Math.random() * $scope.subreddits.length)];

			// ensure we get a new subreddit each time.
			if (sub == $scope.subreddit) {
console.log(4);
				return getRandomSubreddit();
			}

console.log(5);
			return sub;
		};

		$scope.fetch = function() {
console.log(6);
			$scope.subreddit = getRandomSubreddit();
			$http.jsonp('http://www.reddit.com/r/' + $scope.subreddit + '.json?limit=50&jsonp=JSON_CALLBACK').success(function(data) {
console.log(7);
				$scope.posts = data.data.children;
			});
		};

		$scope.start = function() {
console.log(8);
			cfpLoadingBar.start();
		};

		$scope.complete = function () {
console.log(9);
			cfpLoadingBar.complete();
		}


		// fake the initial load so first time users can see it right away:
		$scope.start();
		$scope.fakeIntro = true;
		$timeout(function() {
console.log(10);
			$scope.complete();
			$scope.fakeIntro = false;
		}, 750);

console.log(11);
	});