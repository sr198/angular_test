/**
*  Module
*
* Description
*/
var app = angular.module('myApp', []);

/**
 Typically, when you create an application you need to setup the initial state for the Angular $scope.
 You do this by attaching properties to the $scope objects. 
 The properties contain the view model. All the $scope properties will be available to the template at the point in the DOM where the controller is registered.
 For more info - https://docs.angularjs.org/guide/controller
**/
/**
The example below demonstrates creating a HelloWorld controller which attaches a greeting property containg the message Hello World to the $scope
**/
app.controller('HelloWorld', ['$scope', function($scope){
	$scope.greeting = "Hello World";
}]);


app.controller('DataController', ['$scope', function($scope){
	$scope.employees = [ 
			{name:'John Doe', address:'Mason, OH'},
			{name:'Jane Doe', address:'Manhattan, KS'},
			{name:'Apple Jobs', address:'Milford, OH'}, 
			{name:'Microsoft Gates', address:'Batavia, OH'},
			{name:'Harold Kumar', address:'London, UK'},
			{name:'Helmut Kohl', address:'Cologne, Germany'},
			{name:'Margie Klon', address:'Berlin, Germany'},
			{name:'Juan Vargas', address:'Mallorca, Spain'}, 
			{name:'Yuvraj Thapar', address:'Pune, India'},
			{name:'Gajendra Valiveti', address:'Chennai, India'}
			];
	$scope.message = function( name ) { return "Hey "+ name + ", how're you doing?"};
	}]);