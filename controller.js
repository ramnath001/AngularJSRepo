var app = angular.module('myApp', []);
app.controller('LoginCtrl', function($scope, $http) {
	
	$scope.login = function(){
		
		console.log($scope.credentials);
	}
	/*
    $http.get("http://localhost:8080/jenkins_jobs")
    .success(function(response) {
	
	
	$scope.names = response.job.data.builds;
	console.log($scope.names);
	*/
	
	});
