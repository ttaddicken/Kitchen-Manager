app.controller('PublicDishesController', function ($firebaseArray, $scope, DishService, CONSTANTS ) {

    // $scope.dishes = DishService.getDishes();
    //   $scope.dishList.$get(dishes);
 $scope.indatabase = $firebaseArray(new Firebase('https://kitchen-manager.firebaseio.com/dishes'));
//  console.log($scope.indatabase, $scope.indatabase.length);
});