app.controller('GroceryController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {
    
    $scope.items = DishService.getGroceryItems()
    
    DishService.getGroceryItems().$loaded(function(x){
        $scope.items =  x;
    })
    
       
    $scope.checkboxModel = {};

    $scope.completedItems = [];

    $scope.updateItems = function(item) {
        debugger;
        for(key in item){
            if(item[key] === false){
             item[key] = true
            }
        }
        $scope.items.$save(item);
        $scope.checkboxModel.value = "NO";
    }    

    $scope.updateCompletedItems = function(item) {
        for(key in item){
            if(item[key] === true){
             item[key] = false
            }
        }
        $scope.items.$save(item);
        $scope.checkboxModel.value = "NO";
    } 
    
    $scope.makeBudget = function(budget){
        var prices = [];
        $scope.totalExpenses = 0;
        $scope.newBudget = 0;
        for(var i = 0; i < $scope.items.length; i++){
            if ($scope.items[i].totalCost){
                prices.push($scope.items[i].totalCost)
            }
        }
        debugger;
            for (var i = 0; i < prices.length; i++){
                $scope.totalExpenses += prices[i]
            }
            return $scope.newBudget = $scope.budget - $scope.totalExpenses
    }
    

})