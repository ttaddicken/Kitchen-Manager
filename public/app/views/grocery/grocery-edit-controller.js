app.controller('GroceryEditController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {
    
    $scope.updateItem = function(index, item){
        list = $rootScope.member.groceryList
        list[index] = item;
        $rootScope.member.$save();
        
    }

    $scope.removeItem = function(index, item){
        $rootScope.member.groceryList[index] = null
        $rootScope.member.$save();
    }

    
});