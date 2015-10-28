var app = angular.module('myApp', []);
/*controller module added */
app.controller('LoginCtrl', function($scope, $http) {
	
	/* added api call */
	$scope.login = function(){
		
		console.log($scope.credentials);
		
		 $http.get("http://codeanalysis.corp.equinix.com/api/resources?metrics=ncloc&format=json")
    .success(function(response) {
	
	console.log("wjhdiwjh");
	console.log("in github");
	$scope.data = response;

	
	
	});
	};
	
   
});
