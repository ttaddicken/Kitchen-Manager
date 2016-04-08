app.controller('GroceryEditController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray, item, $state) {
    
    $scope.item = item;
    
    $scope.cancel = function(){
        $state.go('grocery')
    }
    
    $scope.updateItem = function(item){
        $scope.item.totalCost = $scope.item.unitsbuying * $scope.item.price;   
        $scope.item.$save(item).then(function() {
            $state.go("grocery")
        })
    }

    $scope.removeItem = function(index, item){
        delete $rootScope.member.groceryList[item.$id];
        $rootScope.member.$save().then(function() {
            $state.go("grocery")
        })
    }
    
});