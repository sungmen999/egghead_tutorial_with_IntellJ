'use strict';

app.controller('tutorial6Controller', function($scope, mySharedService, notify) {
    var ctrl = this
    $scope.message = 'Hello World!';
    $scope.textService = mySharedService.text;
});
