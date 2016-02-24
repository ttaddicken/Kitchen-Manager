app.controller('PublicDishesController', function($scope, DishService, CONSTANTS, $firebaseArray) {
 
    $scope.dishes = DishService.getDishes();
     }
    })