function tutorial6ControllerFirst ($scope, sharedService){
	$scope.message = sharedService;
};

function tutorial6ControllerSecond ($scope, sharedService) {
	$scope.message = sharedService;

	$scope.reversedMessage = function(){
		return $scope.message.text.split("").reverse().join("");
	};
};

tutorial6ControllerFirst.$inject = ['$scope', 'mySharedService'];
tutorial6ControllerSecond.$inject = ['$scope', 'mySharedService']