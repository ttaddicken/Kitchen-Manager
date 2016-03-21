app.controller('GroceryController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {
   $scope.checkboxModel = {};

    this.getGroceryItems = function() {
        return $rootScope.member.groceryList = items;
        // debugger;
        // return groceryItems;
    }

    // $scope.myDishes = DishService.getMyDishes()

    $scope.completedItems = [];

    $scope.updateCompletedItems = function(index, item) {
        // $scope.checkboxModel = {
        //     value: 'NO'
        // };
        $rootScope.member.groceryList.splice(index, 1);
        $scope.completedItems.push(item);
        $scope.checkboxModel.value = "NO";
    }
    
    

    $scope.acceptChanges = function(index, item){
        list = $rootScope.member.groceryList
        list[index] = item;
        $rootScope.member.$save();
        
    }

    $scope.removeItem = function(index, item){
        $rootScope.member.groceryList[index] = null
        $rootScope.member.$save();
    }



})