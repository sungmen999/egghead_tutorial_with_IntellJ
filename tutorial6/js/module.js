var myapps = angular.module('tutorial6',[]);

myapps.filter('reverse', function(){
	return function(text){
		return text.split("").reverse().join("");
	}
});