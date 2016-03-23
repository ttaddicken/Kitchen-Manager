app.controller('GroceryController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {
    
    // $scope.item = item;
    
    DishService.getGroceryItems().$loaded(function(x){
        $scope.items =  x;
        console.log($scope.items)
    })
    
       
    $scope.checkboxModel = {};

    $scope.completedItems = [];

    $scope.updateCompletedItems = function(index, item) {
        debugger;
        $scope.item.value = true
        $scope.checkboxModel.value = "NO";
    }    


})