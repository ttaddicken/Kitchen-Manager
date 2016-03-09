app.controller('DishDetails', function($firebaseArray, $scope, dish, DishService, CONSTANTS ) {

    // $scope.dishes = DishService.getDishes();
    //   $scope.dishList.$get(dishes);
    $scope.dish = dish
 $scope.indatabase = $firebaseArray(new Firebase('https://kitchen-manager.firebaseio.com/dishes'));
 $scope.ratingStates = DishService.ratingStates

//  console.log($scope.indatabase, $scope.indatabase.length);
});