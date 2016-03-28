app.controller('GroceryController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {
    
    // $scope.item = item;
    
    DishService.getGroceryItems().$loaded(function(x){
        $scope.items =  x;
    })
    
       
    $scope.checkboxModel = {};

    $scope.completedItems = [];

    $scope.updateItems = function(item) {
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

})