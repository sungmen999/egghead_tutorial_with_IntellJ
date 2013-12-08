'use strict';

describe('MainCtrl', function(){
    //we'll use this scope in our tests
    var scope;
    var controller;

    //mock Application to allow us to inject our own dependencies
    beforeEach(
        angular.mock.module('tutorial6')
    );

    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(
        angular.mock.inject(
            function($rootScope, $controller){

        //create an empty scope
        scope = $rootScope.$new();

        //declare the controller and inject our empty scope
        controller = $controller('tutorial6Controller', {$scope: scope});
    }));
    // tests start here
    describe('$scope.message', function(){
        it('should show "Hello World!" ', function(){
            expect(scope.message).toBe('Hello World!');
        });
    });

    describe('$scope.text', function(){
        it('should show "This is application service." ', function(){
            expect(scope.textService).toBe('This is application service.');
        });
    });

});