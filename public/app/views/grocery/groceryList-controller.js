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
    
    
    // this don't work :(
    $scope.acceptChanges = function(index, item){
        list = $rootScope.member.groceryList
        list[index] = item;
        $rootScope.member.$save();
        
    }
// this almost works
    $scope.removeItem = function(index, item){
        debugger;
        $rootScope.member.groceryList[index] = null
        $rootScope.member.$save();
    }



})