var app = angular.module('tutorial6', [], function($provide){

    // can create service with  $provide
//    $provide.factory('mySharedService', function(){
//
//        return {
//            text: 'This is application service.'
//        };
//    });

    $provide.factory('notify', ['$window', function(win) {
        var msgs = [];
        return function(msg) {
            msgs.push(msg);
            if (msgs.length == 3) {
                win.alert(msgs.join("\n"));
                msgs = [];
            }
        };
    }]);
});
