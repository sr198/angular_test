/**
*  Module
*
* Description
*/
angular.module('myApp', [])
	.controller('DataController', ['$scope', function($scope){
		$scope.employees = [ {name:'John Doe', address:'Mason, OH'},
				{name:'Jane Doe', address:'Manhattan, KS'},
				{name:'Apple Jobs', address:'Milford, OH'}, 
				{name:'Microsoft Gates', address:'Batavia, OH'},
				{name:'Amanda Johns', address:'West Chester, OH'}
				];
		}]);