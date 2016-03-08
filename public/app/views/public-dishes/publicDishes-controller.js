app.controller('PublicDishesController', function ($firebaseArray, $scope, DishService, CONSTANTS ) {

    // $scope.dishes = DishService.getDishes();
    //   $scope.dishList.$get(dishes);
 $scope.indatabase = DishService.getDishes();
//  console.log($scope.indatabase, $scope.indatabase.length);
});