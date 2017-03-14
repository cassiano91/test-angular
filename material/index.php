<html lang="pt-br" >
	<head>
		<title>Angular Material Desing</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Angular Material style sheet -->
		<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
	</head>
	<body ng-app="dialogDemo1" ng-cloak>

		<div ng-controller="AppCtrl" class="md-padding" id="popupContainer" ng-cloak>
			<p class="inset">
				Open a dialog over the app's content. Press escape or click outside to close the dialog and
				send focus back to the triggering button.
			</p>

			<div class="dialog-demo-content" layout="row" layout-wrap layout-margin layout-align="center">
				<md-button class="md-primary md-raised" ng-click="showAlert($event)"   >
					Alert Dialog
				</md-button>
				<md-button class="md-primary md-raised" ng-click="showConfirm($event)" >
					Confirm Dialog
				</md-button>
				<md-button class="md-primary md-raised" ng-click="showPrompt($event)"  >
					Prompt Dialog
				</md-button>

			</div>
			<div ng-if="status" id="status">
				<b layout="row" layout-align="center center" class="md-padding">
					{{status}}
				</b>
			</div>

		</div>

		<!-- Angular Material requires Angular.js Libraries -->
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular-animate.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular-aria.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular-messages.min.js"></script>

		<!-- Angular Material Library -->
		<script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>

		<script src="js/material.js"></script>
	</body>
</html>