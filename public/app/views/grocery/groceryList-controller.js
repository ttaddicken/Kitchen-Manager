app.controller('GroceryController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {
    
    // $scope.item = item;
    
    DishService.getGroceryItems().$loaded(function(x){
        $scope.items =  x;
    })
    
       
    $scope.checkboxModel = {};

    $scope.completedItems = [];

    $scope.updateCompletedItems = function(index) {
        $scope.completedItems.push(item);
        $scope.checkboxModel.value = "NO";
    }

})