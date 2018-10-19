var myApp = angular.module("myApp", []);

myApp.controller('productsController', 
    function($scope, $http){
     
	     $http({method: 'GET', url: 'products.json'}).
            then(function success(response) {
                $scope.items = response.data;
        });

         

    }

    
);