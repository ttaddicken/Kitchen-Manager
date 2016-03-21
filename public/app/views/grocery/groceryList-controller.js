app.controller('GroceryController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {
   
   $scope.checkboxModel = {};

   $scope.items = DishService.getGroceryItems();
   
    // this.getGroceryItems = function() {
    //     return $rootScope.member.groceryList = items;
    // }

    $scope.completedItems = [];

    $scope.updateCompletedItems = function(index, item) {
        $rootScope.member.groceryList.splice(index, 1);
        $scope.completedItems.push(item);
        $scope.checkboxModel.value = "NO";
    }


    $scope.updateItem = function(index, item){
        list = $rootScope.member.groceryList
        list[index] = item;
        $rootScope.member.$save();
        
    }

    // $scope.removeItem = function(index, item){
    //     $rootScope.member.groceryList[index] = null
    //     $rootScope.member.$save();
    // }



})