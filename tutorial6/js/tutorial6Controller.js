'use strict';

app.controller('tutorial6Controller', function($scope, mySharedService) {
    var ctrl = this
    ctrl.full_name = 'Watcharapong Nanthasan';
    $scope.message = 'Hello World!';
    $scope.textService = mySharedService.text;


    ctrl.plus = function(numA, numB){
        return (numA + numB);
    };
});
