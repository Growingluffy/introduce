angular.module('myApp',[])
.controller('signIn',function($scope){
	$scope.userdata = {};
	$scope.submitForm = function () {
		if ($scope.signUpForm.$valid) {
			alert('欢迎来到我的主页, '+ $scope.userdata.username + "先生/女士！");
		}
		
	}
});