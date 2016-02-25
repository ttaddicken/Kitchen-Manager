app.controller('PublicDishesController', function ($scope, DishService, CONSTANTS, $firebaseArray) {

    // $scope.dishes = DishService.getDishes();
    //   $scope.dishList.$get(dishes);
 $scope.indatabase = $firebaseArray(new Firebase('https://kitchen-manager.firebaseio.com/dishes'));
 console.log($scope.indatabase, $scope.indatabase.length);
});