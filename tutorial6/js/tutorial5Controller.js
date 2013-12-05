function tutorial5ControllerFirst ($scope, sharedService){
	$scope.message = sharedService;
};

angular.module('tutorial6', []).filter('reverse', function(){
	return function(text){
		return text.split("").reverse().join("");
	};
});

function tutorial5ControllerSecond ($scope, sharedService) {
	$scope.message = sharedService;

	$scope.reversedMessage = function(){
		return $scope.message.text.split("").reverse().join("");
	};
};

tutorial5ControllerFirst.$inject = ['$scope', 'mySharedService'];
tutorial5ControllerSecond.$inject = ['$scope', 'mySharedService']