'use strict';

describe('MainCtrl', function(){
    //we'll use this scope in our tests
    var scope = null;
    var ctrl = null;

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
        //injecting any services or other injectables we need.
        ctrl = $controller('tutorial6Controller', {
            $scope: scope
            // it can mock service that you inject in controller
            // *someService: mockService
        });
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

    describe('ctrl.full_name', function(){
         it('should show "Watcharapong Nanthasan"', function(){
             expect(ctrl.full_name).toBe('Watcharapong Nanthasan');
         });
    });

    describe('plus', function(){
        it('should called', function(){
            ctrl.plus = jasmine.createSpy('ctrl.plus');
            ctrl.plus();
            expect(ctrl.plus).toHaveBeenCalled();
        });

        it('should called with params', function(){
            ctrl.plus = jasmine.createSpy('ctrl.plus');
            ctrl.plus(1,2);
            expect(ctrl.plus).toHaveBeenCalledWith(1,2);
        });
    });

});
