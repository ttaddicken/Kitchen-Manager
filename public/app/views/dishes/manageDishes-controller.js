app.controller('ManageDishesController', function($scope, DishService, CONSTANTS, $firebaseArray) {
    debugger
    $scope.dishes = DishService.getDishes();
    
    $scope.removeRecipe = function (index){
        $scope.dishes.splice(index,1)
    }
    $scope.testPush= function(){
    debugger
    this.dishes = DishService.getDishes();
    this.dishes = $firebaseArray(new Firebase(CONSTANTS + 'dishes'));
    this.dishes.$add(this.dishes)
    
    
}
})